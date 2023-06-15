/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLatestNews, getSources, getNewYorkTimesNews, getGuardianNews, getNewsApiNews } from '../services/news.services'
import queryString from 'query-string'
import routes from '../routes'
import dayjs from 'dayjs'
import { News, NewsContextProps, NewsResponse, ProviderProps, SearchParams } from '../types'



const NewsContext = createContext<NewsContextProps>({} as NewsContextProps)

const currentDate = new Date()
const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())

const useNews = () => {

    const { nyt_page, gua_page, new_page, page, category: category_param, search: search_param } = queryString.parse(window.location.search)
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState<null|string>(null)
    const [latestNews, setLatestNews] = useState([])
    const [nyTimes, setNyTimes] = useState<News[]>([])
    const [guardian, setGuardian] = useState<News[]>([])
    const [newsApi, setNewsApi] = useState<News[]>([])
    const [sourceCategories, setSourceCategories] = useState([])
    const [pageNYTimes, setPageNYTimes] = useState(0)
    const [pageGuardian, setPageGuardian] = useState(0)
    const [searchPage, setSearchPage] = useState(1)
    const [pageNewsApi, setPageNewsApi] = useState(0)
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState<News[]>([])
    const [searchParams, setSearchParams] = useState<SearchParams>({ source: '', query: '', date: [dayjs(lastMonth), dayjs(currentDate)], category: '' })
    
    useEffect(() => {
      setPageNYTimes(Number(nyt_page) || 1)
    }, [nyt_page])

    useEffect(() => {
        setPageGuardian(Number(gua_page) || 1)
    }, [gua_page])

    useEffect(() => {
        setPageNewsApi(Number(new_page) || 1)
    }, [new_page])

    useEffect(() => {
        setSearchPage(Number(page) || 1)
    }, [page])

    useEffect(() => {
        (async () => {
            if (location === routes.HomePath.relativePath)
            console.log('running?')
            try {
                const category = String(category_param || '')
                const search = search_param === 'true'
                const begin_date = search ? dayjs(lastMonth).format('YYYY-MM-DD') : undefined
                const end_date = search ? dayjs(currentDate).format('YYYY-MM-DD') : undefined
                setLoading(true)
                const [latestNews, nyTimesNews, guardianNews, newsApiNews] = await Promise.all([
                    await getLatestNews(), await getNewYorkTimesNews({ category , search, begin_date, end_date }), await getGuardianNews({ category, search, begin_date, end_date }), await getNewsApiNews({ category, search, begin_date, end_date })
                ])
                setLatestNews(latestNews)
                if (nyTimesNews.status === 'ok'){
                    console.log('nytimes ran')
                    setNyTimes(nyTimesNews.data)}
                if (guardianNews.status === 'ok') setGuardian(guardianNews.data)
                if (newsApiNews.status === 'ok') setNewsApi(newsApiNews.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [location, category_param, search_param])

    useEffect(() => {
        (async () => {
            if (location === routes.NYTPath.relativePath)
            try {
                setLoading(true)
                const news = await getNewYorkTimesNews({ page: pageNYTimes || 1 })
                if (news.status === 'ok') setNyTimes(news.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [pageNYTimes, location])

    useEffect(() => {
        (async () => {
            if (location===routes.GuardianPath.relativePath)
            try {
                setLoading(true)
                const news = await getGuardianNews({ page: pageGuardian || 1 })
                if (news.status === 'ok') setGuardian(news.data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [pageGuardian, location])
    
    useEffect(() => {
        (async () => {
            if (location===routes.NewsApiPath.relativePath)
            try {
                setLoading(true)
                const news = await getNewsApiNews({ page: pageNewsApi || 1})
                if (news.status === 'ok') setNewsApi(news.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [location, pageNewsApi])

    useEffect(() => {
        (async () => {
            if (location===routes.SearchPath.relativePath)
          try {
            setLoading(true)

            let results: NewsResponse ={} as NewsResponse
            if (searchParams.source === 'The New York Times')
              results = await getNewYorkTimesNews({ category: searchParams.category, begin_date: searchParams.date[0]?.format('YYYYMMDD'), end_date: searchParams.date[1]?.format('YYYYMMDD'), keyword: searchParams?.query, search: true, page: searchPage || 1 })
            if (searchParams.source === 'The Guardian')
              results = await getGuardianNews({ category: searchParams.category, begin_date: searchParams.date[0]?.format('YYYY-MM-DD'), end_date: searchParams.date[1]?.format('YYYY-MM-DD'), keyword: searchParams?.query, search: true, page: searchPage || 1 })
            if (searchParams.source === 'News API')
              results = await getNewsApiNews({ category: searchParams.category, begin_date: searchParams.date[0]?.format('YYYY-MM-DD'), end_date: searchParams.date[1]?.format('YYYY-MM-DD'), keyword: searchParams?.query, search: true, page: searchPage || 1 })
            console.log(results)
            if (results.status === 'ok') {
              setSearchResults(results.data)
            }
          } catch (error) {
            console.log(error)
          } finally {
            setLoading(false)
          }
        })()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [setLoading, searchPage])

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let results: NewsResponse = {} as NewsResponse
        if (searchParams.source === 'The New York Times')
          results = await getNewYorkTimesNews({ category: searchParams.category, begin_date: searchParams.date[0]?.format('YYYYMMDD'), end_date: searchParams.date[1]?.format('YYYYMMDD'), keyword: searchParams?.query, search: true })
        if (searchParams.source === 'The Guardian')
          results = await getGuardianNews({ category: searchParams.category, begin_date: searchParams.date[0]?.format('YYYY-MM-DD'), end_date: searchParams.date[1]?.format('YYYY-MM-DD'), keyword: searchParams?.query, search: true })
        if (searchParams.source === 'News API')
          results = await getNewsApiNews({ category: searchParams.category, begin_date: searchParams.date[0]?.format('YYYY-MM-DD'), end_date: searchParams.date[1]?.format('YYYY-MM-DD'), keyword: searchParams?.query, search: true })
        if (results.status === 'ok') {
          setSearchResults(results.data)
        }
      }
    
    useEffect(() => {
        (async () => {
            setSourceCategories(await getSources())
        })()
    }, [])

    return {
        latestNews, sourceCategories, nyTimes, guardian, location, setLocation, loading, setLoading, searchResults,
        newsApi, pageNYTimes, setPageNYTimes, pageGuardian, setPageGuardian, pageNewsApi, setPageNewsApi, setSearchPage,
        handleSubmit, searchParams, setSearchParams, category, setCategory, searchPage
    }
}
export function NewsProvider({ children }: ProviderProps) {
    const news = useNews()
    return (
        <NewsContext.Provider value={news}>
            {children}
        </NewsContext.Provider>
    )
}

export default () => useContext(NewsContext)
