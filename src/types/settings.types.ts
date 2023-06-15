import { DateRange } from "@mui/x-date-pickers-pro"
import { Dayjs } from "dayjs"

export interface CategoriesTags {
    tag_name: string,
    id: number | null
}

export interface SettingsContextProps {
    data: Data,
    setData: (data: Data) => void,
    loading: boolean
    setLoading: (loading: boolean) => void
}

export interface Data {
    favoritesNYT: any,
    favoritesGUA: any,
    availableDataNYT: any[],
    availableDataGUA: any[],
    categories: CategoriesTags[]
    NYTSettings: Settings,
    GUASettings: Settings
}

export interface Settings {
    id: number,
    sort?: string,
    source_id: number,
    source?: string
}

export interface SelectCategoriesProps {
    data: Data
    searchParams: SearchParams
    setSearchParams: (params: SearchParams) => void
}

export type SearchParams = {
    source: string
    query: string
    date: DateRange<Dayjs>
    category: string
}
