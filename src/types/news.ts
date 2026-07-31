export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Events' | 'Sponsorships';
  summary: string;
  content: string[];
  image: string;
  secondaryImage?: string;
}