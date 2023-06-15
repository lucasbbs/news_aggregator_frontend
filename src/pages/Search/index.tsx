import React, { useEffect } from 'react'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { ArticlesSection, StyledForm, StyledWrapper, SubmitButton } from './style';
import useNews from '../../hooks/useNews';
import routes from '../../routes';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import SelectCategories from './SelectCategories';
import ArticleCard from '../../components/ArticleCard';
import queryString from 'query-string'
import { useNavigate } from 'react-router-dom';
import HeaderSource from '../../components/HeaderSource';


function Search() {
  const navigate = useNavigate()
  const qs = queryString.parse(window.location.search)

  const handleNavigatePage = (sourceId: string, direction: string) => {
    const { page } = qs
    const currentPage = Number(page) || 0
    setSearchPage(currentPage)
    const newParams = queryString.stringify({ ...qs, page: direction === 'right' ? currentPage === 0 ? currentPage + 2 : currentPage + 1 : Math.max(currentPage - 1, 1) })
    navigate(`?${newParams}#${sourceId}`)
  }
  const { setLocation, setSearchPage, searchResults, handleSubmit, setSearchParams, searchParams } = useNews()
  const { data } = useSettings()

  const source = { id: 'search', name: searchParams.source, news: searchResults }

  useEffect(() => {
    setLocation(routes.SearchPath.relativePath)
  }, [setLocation])

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Grid container display='flex' gap={2} justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <TextField value={searchParams.query} onChange={(e) => setSearchParams({ ...searchParams, query: e.target.value })} fullWidth label="Keyword" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={5}>
            <DateRangePicker
              value={searchParams.date}
              onChange={() => setSearchParams({ ...searchParams, date: searchParams.date })}
              sx={{ width: '100%' }}
              localeText={{ start: 'Date from', end: 'Date to' }} />
          </Grid>
          <Grid item xs={12} md={5}>
            <FormControl fullWidth variant="outlined" sx={{ minWidth: 120 }}>
              <InputLabel>Source</InputLabel>
              <Select
                value={searchParams.source}
                label="Source"
                name='source'
                onChange={(e) => setSearchParams({ ...searchParams, source: e.target.value })}
              >
                <MenuItem disabled selected value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='The New York Times'>The New York Times</MenuItem>
                <MenuItem value='The Guardian'>The Guardian</MenuItem>
                <MenuItem value='News API'>News API</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5}>
            <SelectCategories data={data} searchParams={searchParams} setSearchParams={setSearchParams} />
          </Grid>

        </Grid>
        <SubmitButton type='submit'>Search</SubmitButton>
      </StyledForm>
      {searchResults.length ? <HeaderSource showArrowButtons source={source} handleNavigatePage={handleNavigatePage} /> : null}
      <ArticlesSection>
        {searchResults.map((article, index) => (
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
        ))
        }
      </ArticlesSection>
    </StyledWrapper>
  )
}

export default Search