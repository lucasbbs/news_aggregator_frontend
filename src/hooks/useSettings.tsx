/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useContext, useEffect, useState } from 'react'
import useNews from './useNews'
import { getUserFavorites } from '../services/favorite-categories.services'
import { getTags } from '../services/tag.services'
import { getSettings } from '../services/settings.services'
import useAuth from './useAuth'
import { Data, SettingsContextProps, ProviderProps, Settings } from '../types'

const SettingsContext = createContext<SettingsContextProps>({} as SettingsContextProps)

const useSettings = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Data>({
        favoritesNYT: [], favoritesGUA: {}, availableDataNYT: [], availableDataGUA: [], categories: [], NYTSettings: {} as Settings, GUASettings: {} as Settings
    })
    const { user } = useAuth()
    const { sourceCategories } = useNews()

    useEffect(() => {
        (async () => {
            if (!user) return
            setLoading(true);
            const [{ data: favoriteCategories }, { data: favoriteTags }, { data: userFavorites }] = await Promise.all([await getUserFavorites(), await getTags(), await getSettings()])
            const NYTSettings = userFavorites.find((s: any) => s.source_id === 1)
            const GUASettings = userFavorites.find((s: any) => s.source_id === 2)
            
            const favoritesNYT =  NYTSettings ? favoriteCategories.find((d: any) => d.source_id === NYTSettings?.id) : []
            const availableDataNYT = sourceCategories.filter((s) => s.source_id === 2 && favoritesNYT?.id !== s.id)
            const favoritesGUA = GUASettings ? favoriteCategories.find((d: any) => d.source_id === GUASettings?.id) : []
            const availableDataGUA = sourceCategories.filter((s) => s.source_id === 1 && favoritesGUA?.id !== s.id)
            setData({ 
                favoritesNYT, favoritesGUA, availableDataNYT, availableDataGUA, categories: favoriteTags, NYTSettings, GUASettings
            })
            setLoading(false);
        })()
    }, [sourceCategories, user])


    return {
        data, setData, loading, setLoading
    }
}
export function SettingsProvider({ children }: ProviderProps) {
    const settings = useSettings()
    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    )
}

export default () => useContext(SettingsContext)
