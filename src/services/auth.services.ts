import api from "./api";

export const logout = async () => {
    const response = await api.post('/auth/logout');
    return response;
}

export const login = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response;
}

export const register = async (name: string, email: string, password: string, confirm_password: string) => {
    const response = await api.post('/auth/register', { name, email, password, confirm_password });
    return response;
}
