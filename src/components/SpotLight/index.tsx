import React from 'react'
import { StyledNewspaper, StyledContainer } from './styles'

function SpotLight() {
  return (
    <StyledContainer>
        <div className="spot-light-section">
            <h2 className="title">News</h2>
            <p className="description">
                The Most important news of the day
            </p>
            <div className="dividers-container">
                <div className="divider" />
                <div className="icon-container"><StyledNewspaper/> </div>
                <div className="divider" />
            </div>
        </div>
    </StyledContainer>
  )
}

export default SpotLight