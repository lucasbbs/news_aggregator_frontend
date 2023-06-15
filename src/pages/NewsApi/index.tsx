import React, { useEffect } from "react";
import ArticleCard from "../../components/ArticleCard"
import { ArticlesSection, StyledContainer, NewsContainer } from "./styles"
import useNews from "../../hooks/useNews"
import queryString from 'query-string'
import { sources } from "../../data/sources.data";
import { useNavigate } from "react-router-dom";
import HeaderSource from "../../components/HeaderSource";
import routes from "../../routes";

const NewsApi = () => {

  const qs = queryString.parse(window.location.search)
  const { setLocation, newsApi, setPageNYTimes, pageNYTimes } = useNews()

  const mappedSources = sources.filter(s => s.id === 'NEW').map(source => ({ ...source, news: newsApi, page: pageNYTimes, setPage: setPageNYTimes }))

  const navigate = useNavigate()

  useEffect(() => {
    setLocation(routes.NewsApiPath.relativePath)
  }, [setLocation])


  const handleNavigatePage = (sourceId: string, direction: string) => {
    const { new_page } = qs
    const currentPage = Number(new_page) || 0
    const newParams = queryString.stringify({ ...qs, new_page: direction === 'right' ? currentPage === 0 ? currentPage + 2 : currentPage + 1 : Math.max(currentPage - 1, 1) })
    navigate(`?${newParams}#${sourceId}`)
  }

  return (
    <StyledContainer>
      <NewsContainer>
        <div>
          {mappedSources.map(source => (
            source.source === 'error' ? <h2 style={{ textAlign: 'center' }}>Error loading news</h2> :
              <div key={source.id}>
                {source.news ? <HeaderSource showArrowButtons source={source} handleNavigatePage={handleNavigatePage} /> : null}
                <ArticlesSection>
                  {source.news?.map((article, index) => (
                    <ArticleCard
                      isSearchCard={true}
                      key={article.title}
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
              </div>
          ))}

        </div>
      </NewsContainer>
    </StyledContainer>
  )
}

export default NewsApi