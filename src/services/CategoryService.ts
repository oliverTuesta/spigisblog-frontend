import axios from 'axios';
import CategoryModel from '@/models/CategoryModel';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/categories';

export default class CategoryService {
  public async getAll(): Promise<CategoryModel[]> {
    const response = await axios.get(API_URL);
    return response.data;
  }

  public async getCategoryById(categoryId: number): Promise<CategoryModel> {
    const response = await axios.get(`${API_URL}/${categoryId}`);
    return response.data;
  }

  public async getCategoryBySlug(categorySlug: string): Promise<CategoryModel> {
    const response = await axios.get(`${API_URL}/slug/${categorySlug}`);
    return response.data;
  }

  public async createCategory(category: CategoryModel): Promise<CategoryModel> {
    const response = await axios.post(API_URL, category);
    return response.data;
  }

  public async updateCategory(category: CategoryModel): Promise<CategoryModel> {
    const response = await axios.put(`${API_URL}/${category.id}`, category);
    return response.data;
  }

  public async deleteCategory(categoryId: number): Promise<void> {
    await axios.delete(`${API_URL}/${categoryId}`);
  }
}
