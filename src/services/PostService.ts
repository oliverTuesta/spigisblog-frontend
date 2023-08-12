import axios from 'axios';
import PostModel from '@/models/PostModel';

const API_URL = process.env.API_BASE_URL;

export default class PostService {
  async getPosts(): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  }

  async getPopularPosts(): Promise<PostModel[]> {
    const response = await axios.get(`${API_URL}/posts/popular`);
    return response.data;
  }
}
