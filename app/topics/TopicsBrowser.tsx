"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PopularUnit, TopicCategory } from "./types";

function CategoryCard({ cat }: { cat: TopicCategory }) {
  const hasAvailable = cat.items.some((item) => item.href !== null);

  return (
    <div className={`bg-white rounded-2xl border border-gray-200 ${cat.topBorder} shadow-sm p-6`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-11 h-11 rounded-xl ${cat.iconBg} flex items-center justify-center text-2xl shrink-0`}>
          {cat.icon}
        </div>
        <div>
          <h2 className="font-black text-gray-900 text-lg leading-tight">
            {cat.title}
            {cat.subtitle && (
              <span className="text-sm font-medium text-gray-400 ml-1.5">（{cat.subtitle}）</span>
            )}
          </h2>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{cat.description}</p>

      {/* Items list */}
      <ul className="space-y-2">
        {cat.items.map((item) =>
          item.href ? (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-sm font-bold text-blue-700 truncate">{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    {item.grades}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </li>
          ) : (
            <li key={item.label}>
              <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl opacity-50">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                  <span className="text-sm text-gray-500 truncate">{item.label}</span>
                </div>
                <span className="text-xs font-medium bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full shrink-0">
                  {item.grades}
                </span>
              </div>
            </li>
          )
        )}
      </ul>

      {!hasAvailable && (
        <div className="mt-4 text-center">
          <span className="text-xs font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
            準備中です
          </span>
        </div>
      )}
    </div>
  );
}

export default function TopicsBrowser({
  categories,
  popularUnits,
}: {
  categories: TopicCategory[];
  popularUnits: PopularUnit[];
}) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.label.toLowerCase().includes(normalizedQuery) ||
            item.grades.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((cat) => cat.items.length > 0 || cat.title.toLowerCase().includes(normalizedQuery));
  }, [categories, normalizedQuery]);

  const filteredPopularUnits = useMemo(() => {
    if (!normalizedQuery) return popularUnits;
    return popularUnits.filter(
      (u) =>
        u.label.toLowerCase().includes(normalizedQuery) ||
        u.grade.toLowerCase().includes(normalizedQuery)
    );
  }, [popularUnits, normalizedQuery]);

  const noResults = normalizedQuery !== "" && filteredCategories.length === 0 && filteredPopularUnits.length === 0;

  return (
    <>
      {/* Search bar */}
      <div className="relative max-w-lg">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="単元を検索..."
          className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="検索をクリア"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {noResults ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">「{query}」に一致する単元が見つかりませんでした。</p>
        </div>
      ) : (
        <>
          {/* Category cards */}
          {filteredCategories.length > 0 && (
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-6">系統から探す</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredCategories.map((cat) => (
                  <CategoryCard key={cat.title} cat={cat} />
                ))}
              </div>
            </div>
          )}

          {/* Popular units */}
          {filteredPopularUnits.length > 0 && (
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-5">人気の単元</h2>
              <div className="flex flex-wrap gap-2.5">
                {filteredPopularUnits.map((u) => (
                  <Link
                    key={u.label}
                    href="#"
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-blue-300 hover:shadow-sm transition-all duration-150 group"
                  >
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${u.gc}`}>{u.grade}</span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{u.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
