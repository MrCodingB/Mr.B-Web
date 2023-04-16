import { Project } from './project';

export interface ProjectCategory {
  name: string;
  href?: string;
  projects: Project[];
}
