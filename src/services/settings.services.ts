import api from "./api";

export const getSettings = async () => {
    const response = await api.get('/settings');
    return response;
}

export const createSettings = async (source_id: number, sort?: 'newest'| 'oldest' | 'relevance', source?: string) => {
    const response = await api.post('/settings', { sort, source, source_id });
    return response;
}