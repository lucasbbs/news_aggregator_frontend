import { CategoriesTags, SettingsContextProps, Settings, Data, SelectCategoriesProps, SearchParams  } from "./settings.types";

import { NewsContextProps, News, Source, NewsResponse, NewsParams } from "./news.types";

import { AuthContextProps } from "./auth.types";

export interface ProviderProps {
    children: React.ReactNode
}


export type {
    CategoriesTags,
    SettingsContextProps,
    Settings,
    Data,
    SelectCategoriesProps,
    SearchParams,
    NewsContextProps,
    News,
    Source,
    NewsResponse,
    NewsParams,
    AuthContextProps
}