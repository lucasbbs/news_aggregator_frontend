import api from "./api";

export  const saveUserFavorites = async (category_id?: number, source_id?: number) => {
    const response = await api.post('/favorites/user-favorites', { category_id, source_id });
    return response;
}

export const getUserFavorites = async () => {
    const response = await api.get('/sources/favorites');
    return response;
}