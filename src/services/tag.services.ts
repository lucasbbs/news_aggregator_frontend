import { CategoriesTags } from '../types';
import api from './api';

export const createTag = async (tag_names: string[]): Promise<CategoriesTags> => {
    const response = await api.post<CategoriesTags, CategoriesTags>('/tags', { tag_names });
    return response;
}

export const getTags = async () => {
    const response = await api.get('/tags');
    return response;
}

export const deleteTag = async (tag_id: number) => {
    const response = await api.delete(`/tags/${tag_id}`);
    return response;
}