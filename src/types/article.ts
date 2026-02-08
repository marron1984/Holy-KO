export interface Author {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export interface ArticleFrontmatter {
  title: string;
  date: string;
  category: string;
  description: string;
  thumbnail: string;
  author: string;
  lastUpdated?: string;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  content: string;
}
