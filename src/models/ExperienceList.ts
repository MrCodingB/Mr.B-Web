import { RangedContentItem } from './contentItem';

export interface ExperienceList {
  organisation: string;
  start: string;
  end?: string;
  positions: RangedContentItem[];
}
