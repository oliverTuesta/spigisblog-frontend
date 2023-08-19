import axios from 'axios';
import TagModel from '@/models/TagModel';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/tags';

export default class TagService {
  public async getAll(): Promise<TagModel[]> {
    const response = await axios.get(API_URL);
    return response.data;
  }

  public async getTagById(tagId: number): Promise<TagModel> {
    const response = await axios.get(`${API_URL}/${tagId}`);
    return response.data;
  }

  public async getTagBySlug(tagSlug: string): Promise<TagModel> {
    const response = await axios.get(`${API_URL}/slug/${tagSlug}`);
    return response.data;
  }

  public async createTag(tag: TagModel): Promise<TagModel> {
    const response = await axios.post(API_URL, tag);
    return response.data;
  }

  public async updateTag(tag: TagModel): Promise<TagModel> {
    const response = await axios.put(`${API_URL}/${tag.id}`, tag);
    return response.data;
  }

  public async deleteTag(tagId: number): Promise<void> {
    await axios.delete(`${API_URL}/${tagId}`);
  }
}
