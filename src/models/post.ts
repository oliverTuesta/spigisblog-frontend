interface Post {
  title: string;
  content: string;
  summary: string;
  thumbnail: string;
  slug: string;
  views: number;
  publishDate: Date;
  createDate: Date;
  updateDate: Date;
  category?: string;
}
