export type TopicItem = {
  label: string;
  grades: string;
  href: string | null;
};

export type TopicCategory = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  topBorder: string;
  iconBg: string;
  iconText: string;
  items: TopicItem[];
};

export type PopularUnit = {
  label: string;
  grade: string;
  gc: string;
};
