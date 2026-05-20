export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  detailImage: string;
  description: string;
  gallery?: string[];
}

export interface Award {
  id: string;
  title: string;
  year: string;
  comment: string;
  icon: string;
}

export interface ToolItem {
  id: string;
  name: string;
  icon: string;
  type: 'plant' | 'window' | 'light' | 'shadow';
}
