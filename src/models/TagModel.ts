export default class TagModel {
  id: number;
  name: string;
  slug: string;

  constructor(name: string, slug: string, id: number) {
    this.id = id;
    this.name = name;
    this.slug = slug;
  }
}
