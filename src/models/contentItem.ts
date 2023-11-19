export interface ContentItem {
  title: string;
  subtitle: string;
}

export interface TextContentItem extends ContentItem {
  text: string;
}

export interface RangedContentItem extends TextContentItem {
  start: string;
  end?: string;
}

export interface DatedContentItem extends TextContentItem {
  date: string;
}
