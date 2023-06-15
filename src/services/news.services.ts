import { NewsParams, NewsResponse } from "../types";
import api from "./api";

export const getLatestNews = async () => {
    const response = await api.get(`/news/latest`);
    return response.data;
}

export const getNews = async () : Promise<NewsResponse> => {
    const response = await api.get(`/news`);
    return response.data;
}

export const getNewYorkTimesNews = async ({keyword, begin_date, category, end_date, page, sources, search }: NewsParams)  : Promise<NewsResponse> => {
    const response = await api.get(`/news/nytimes`, {
        params: {
            keyword,
            begin_date,
            end_date,
            category,
            sources,
            page,
            search
        }
    });
    return response.data;
}

export const getGuardianNews = async ({keyword, begin_date, category, end_date, page, sources, search }: NewsParams)  : Promise<NewsResponse> => {
    const response = await api.get(`/news/guardian`, {
        params: {
            keyword,
            begin_date,
            end_date,
            category,
            sources,
            page,
            search
        }
    });
    return response.data;
}

export const getNewsApiNews = async ({keyword, begin_date, category, end_date, page, sources, search }: NewsParams)  : Promise<NewsResponse> => {
    const response = await api.get(`/news/newsapi`,{
        params: {
            keyword,
            begin_date,
            end_date,
            category,
            sources,
            page,
            search
        }
    });
    return response.data;
}

export const getSources = async (source_id?: string) => {
    const response = await api.get('/sources',{
        params: {
            source_id: source_id
        }
    });
    return response.data;
}
