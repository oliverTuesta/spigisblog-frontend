export default class PostModel {
  title: string;
  content: string;
  summary: string;
  isVisible: boolean;
  thumbnailUrl: string;
  slug: string;
  createDate: Date;
  updateDate: Date;
  publishDate: Date;
  views: number;
  userId: string;

  constructor(
    title: string,
    content: string,
    summary: string,
    isVisible: boolean,
    thumbnailUrl: string,
    slug: string,
    createDate: Date,
    updateDate: Date,
    publishDate: Date,
    views: number,
    userId: string
  ) {
    this.title = title;
    this.content = content;
    this.summary = summary;
    this.isVisible = isVisible;
    this.thumbnailUrl = thumbnailUrl;
    this.slug = slug;
    this.createDate = createDate;
    this.updateDate = updateDate;
    this.publishDate = publishDate;
    this.views = views;
    this.userId = userId;
  }
}
