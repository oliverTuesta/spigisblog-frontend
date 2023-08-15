import PostModel from './PostModel';

export default class CategoryModel {
  id: number;
  name: string;
  slug: string;
  description: string;
  posts?: PostModel[];

  constructor(id: number, name: string, slug: string, description: string, posts?: PostModel[]) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.description = description;
    this.posts = posts;
  }
}
