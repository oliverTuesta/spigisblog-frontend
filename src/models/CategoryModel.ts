export default class CategoryModel {
  name: string;
  slug: string;
  description: string;

  constructor(name: string, slug: string, description: string) {
    this.name = name;
    this.slug = slug;
    this.description = description;
  }
}
