export interface ContentItem {
  title: string;
  subtitle: string;
  text: string;
}

export interface RangedContentItem extends ContentItem {
  start: string;
  end?: string;
}

export interface DatedContentItem extends ContentItem {
  date: string;
}
