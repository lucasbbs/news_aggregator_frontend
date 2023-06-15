import React from 'react'
import { OutterContainer, CategoryAndDateContainer, ActionsContainer, ArticleCardContainer, Description, Divider, InnerContainer, Image, StyledComment, StyledContainer, StyledReadMore, StyledThumbUp, Title, StyledCalendarDays } from './styles'
import { Link } from 'react-router-dom'


interface Props {
  title: string
  description: string
  image: string
  readMore: string
  publishedAt: string
  category: string
  isSearchCard?: boolean
}


function ArticleCard({ title, description, image, readMore, publishedAt, category, isSearchCard = false }: Props) {
  return (
    <StyledContainer>
      <ArticleCardContainer isSearchCard={isSearchCard}>
      <OutterContainer>
        <InnerContainer hasimage={Boolean(image)}>
          {image && <Image src={image} alt="" />}
          <Title>{title}</Title>
        </InnerContainer>
        <CategoryAndDateContainer><Link to={`?category=${category}&search=true`}>{category}</Link><StyledCalendarDays />{new Intl.DateTimeFormat('en-US').format(new Date(publishedAt))}</CategoryAndDateContainer>
        <Divider />
        
          <Description>{description}</Description>
        </OutterContainer>
        <div className="data-section"></div>
        <ActionsContainer>
          <div className="like-icon vertical-centered">
            <StyledThumbUp />
          </div>
          <div className="comments-icon vertical-centered">
            <StyledComment />
          </div>
          <div className="more-icon vertical-centered">
            <span><Link to={readMore}>Read more...</Link></span>
            <StyledReadMore />
          </div>
        </ActionsContainer>
      </ArticleCardContainer>
    </StyledContainer>
  )
}

export default ArticleCard