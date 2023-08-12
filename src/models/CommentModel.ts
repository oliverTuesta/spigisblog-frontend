export default class CommentModel {
  content: string;
  createDate: Date;
  author: string;

  constructor(content: string, createDate: Date, author: string) {
    this.content = content;
    this.createDate = createDate;
    this.author = author;
  }
}
