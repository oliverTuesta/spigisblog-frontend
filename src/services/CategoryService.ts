import axios from 'axios';
import PostModel from '@/models/PostModel';
import CategoryModel from '@/models/CategoryModel';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/categories';

export default class CategoryService {
  public async getAll(): Promise<CategoryModel[]> {
    const response = await axios.get(API_URL);
    return response.data;
  }

  public async getPosts(categoryId: number): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/${categoryId}/posts`);
    return response.data;
  }
}
