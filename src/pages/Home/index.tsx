import React, { useEffect } from "react";
import ArticleCard from "../../components/ArticleCard"
import { ArticlesSection, QuickNewsSection, StyledContainer, NewsContainer, SideBarTitle } from "./styles"
import QuickNewsCard from "../../components/QuickNewsCard"
import useNews from "../../hooks/useNews"
import queryString from 'query-string'
import { sources } from "../../data/sources.data";
import { useNavigate } from "react-router-dom";
import HeaderSource from "../../components/HeaderSource";
import routes from "../../routes";

const Home = () => {

  const qs = queryString.parse(window.location.search)
  const {
    setLocation, latestNews, nyTimes, guardian, newsApi, setPageNYTimes, setPageGuardian,
    setPageNewsApi, pageNYTimes, pageGuardian, pageNewsApi, setCategory
  } = useNews()

  useEffect(() => {
    setLocation(routes.HomePath.relativePath)
  }, [setLocation])

  const mappedSources = sources.map(source => {
    if (source.id === 'NYT') return { ...source, news: nyTimes, setPage: setPageNYTimes, page: pageNYTimes }
    else if (source.id === 'GUA') return { ...source, news: guardian, setPage: setPageGuardian, page: pageGuardian }
    else return { ...source, news: newsApi, setPage: setPageNewsApi, page: pageNewsApi }
  })

  const navigate = useNavigate()

  useEffect(() => {
    const { category } = qs
    if (category) {
      setCategory(category as string)
    }
  }, [qs, setCategory])


  const handleNavigatePage = (sourceId: string, direction: string) => {
    if (sourceId === 'NYT') {
      const { nyt_page } = qs
      const currentPage = Number(nyt_page) || 0
      const newParams = queryString.stringify({ ...qs, nyt_page: direction === 'right' ? currentPage + 1 : Math.max(currentPage - 1, 1) })
      navigate(`?${newParams}#${sourceId}`)
    }
    else if (sourceId === 'GUA') {
      const { gua_page } = qs
      const currentPage = Number(gua_page) || 0
      const newParams = queryString.stringify({ ...qs, gua_page: direction === 'right' ? currentPage + 1 : Math.max(currentPage - 1, 1) })
      navigate(`?${newParams}#${sourceId}`)
    }
    else {
      const { new_page } = qs
      const currentPage = Number(new_page) || 0
      const newParams = queryString.stringify({ ...qs, new_page: direction === 'right' ? currentPage + 1 : Math.max(currentPage - 1, 1) })
      navigate(`?${newParams}#${sourceId}`)
    }
  }

  return (
    <StyledContainer>
      <NewsContainer>
        <div>
          {mappedSources.map(source => (
            source.source === 'error' ? <h2 style={{ textAlign: 'center' }}>Error loading news</h2> :
              <>
                {source.news ? <HeaderSource source={source} handleNavigatePage={handleNavigatePage} /> : null}
                <ArticlesSection>
                  {source.news?.map(article => (
                    <ArticleCard
                      category={article.category}
                      publishedAt={article.date}
                      title={article.title}
                      description={article.description}
                      image={article.image}
                      // likes={article.likes}
                      // comments={article.}
                      readMore={article.link} />

                  ))}
                </ArticlesSection>
              </>
          ))}

        </div>
        <QuickNewsSection>
          <SideBarTitle>Latest News</SideBarTitle>
          {latestNews.map(quick => (
            <QuickNewsCard
              image={quick.image}
              publishedAt={quick.date}
              title={quick.title}
              description={quick.description}
              link={quick.link} />
          ))}
        </QuickNewsSection>
      </NewsContainer>
    </StyledContainer>
  )
}

export default Home