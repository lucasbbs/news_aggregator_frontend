import React from 'react'
import { DateContainer, Description, StyledCalendarDays, StyledContainer, Title } from './styles'

interface Props {
  title: string
  description: string
  publishedAt: string
  image?: string
  link: string
}

function QuickNewsCard({ title, description, publishedAt, image, link }: Props) {
  return (
      <StyledContainer className="quick-news-card">
        <Title>{title}</Title>
        {image && <img src={image} alt={title} />}
        <DateContainer><StyledCalendarDays/>{new Intl.DateTimeFormat('en-US', { 
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(publishedAt))}</DateContainer>
        <Description>{description}</Description>
      </StyledContainer>
    
  )
}

export default QuickNewsCard