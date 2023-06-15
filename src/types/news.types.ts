import { SearchParams } from "./settings.types"

export interface ProviderProps {
    children: React.ReactNode
}

export interface NewsContextProps {
    latestNews: any[],
    sourceCategories: any[]
    nyTimes: News[]
    guardian: News[]
    newsApi: News[]
    pageNYTimes: number
    setPageNYTimes: (page: number) => void
    pageGuardian: number
    setPageGuardian: (page: number) => void
    pageNewsApi: number
    setPageNewsApi: (page: number) => void
    location: string|null
    setLocation: (location: string) => void
    loading: boolean
    setLoading: (loading: boolean) => void
    searchResults: News[]
    setSearchPage: (page: number) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    searchParams: SearchParams
    setSearchParams: (params: SearchParams) => void
    category: string
    setCategory: (category: string) => void
}

export interface News {
    title: string
    description: string
    date: string
    image: string
    link: string
    category: string
}

export interface Source {
    GUA: News[] | null
    NYT: News[] | null
    NEW: News[] | null
}


export interface NewsParams {
    keyword?: string,
    begin_date?: string,
    end_date?: string,
    category?: string,
    sources?: string,
    page?: number,
    search?: boolean,
}


export interface NewsResponse {
    data: News[],
    status: string
}