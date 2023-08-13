import UserModel from './UserModel';
import TagModel from './TagModel';
import CategoryModel from './CategoryModel';

export default class PostModel {
  id: number;
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
  user: UserModel;
  tags: TagModel[];
  category: CategoryModel;

  constructor(
    id: number,
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
    user: UserModel,
    tags: TagModel[],
    category: CategoryModel
  ) {
    this.id = id;
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
    this.user = user;
    this.tags = tags;
    this.category = category;
  }
}
