import axios from 'axios';
import PostModel from '@/models/PostModel';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/posts';

export default class PostService {
  async getAllPosts(): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  }

  async getPopularPosts(): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/popular`);
    return response.data;
  }

  async getRecentPosts(): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/recent`);
    return response.data;
  }

  async getPostById(id: number): Promise<PostModel> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }

  async createPost(post: PostModel, userId: number): Promise<PostModel> {
    const response = await axios.post(`${API_URL}/users/${userId}`, post);
    return response.data;
  }

  async updatePost(post: PostModel): Promise<PostModel> {
    const response = await axios.put(`${API_URL}/${post.id}`, post);
    return response.data;
  }

  async deletePost(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  }

  async publishPost(id: number): Promise<void> {
    await axios.put(`${API_URL}/${id}/publish`);
  }

  async getPostsByCategory(categoryId: number): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/category/${categoryId}`);
    return response.data;
  }

  async getPostsByCategorySlug(categorySlug: string): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/category/slug/${categorySlug}`);
    return response.data;
  }

  async getPostsByTag(tagId: number): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/tag/${tagId}`);
    return response.data;
  }

  async getPostsByTagSlug(tagSlug: string): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/tag/slug/${tagSlug}`);
    return response.data;
  }

  async getPostBySlug(slug: string): Promise<PostModel> {
    const response = await axios.get(`${API_URL}/slug/${slug}`);
    return response.data;
  }

  async getResentPosts(): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/resent`);
    return response.data;
  }

  async getPostsByUsername(username: string): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/user/${username}`);
    return response.data;
  }

  async addTagToPost(postId: number, tagId: number): Promise<void> {
    await axios.post(`${API_URL}/tag?postId=${postId}&tagId=${tagId}`);
  }

  async removeTagFromPost(postId: number, tagId: number): Promise<void> {
    await axios.delete(`${API_URL}/tag?postId=${postId}&tagId=${tagId}`);
  }

  async addCategoryToPost(postId: number, categoryId: number): Promise<void> {
    await axios.post(`${API_URL}/category?postId=${postId}&categoryId=${categoryId}`);
  }

  async removeCategoryFromPost(postId: number, categoryId: number): Promise<void> {
    await axios.delete(`${API_URL}/category?postId=${postId}&categoryId=${categoryId}`);
  }
}
