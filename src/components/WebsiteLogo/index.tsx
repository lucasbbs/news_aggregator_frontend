import React from 'react'
import { StyledLogoContainer, StyledLoginButton, StyledContainer, StyledLogoutButton } from './styles'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Routes from '../../routes'

function WebSiteLogo() {
  const navigate = useNavigate()
  const { user, logoutUser, setUser } = useAuth()

  const logoutAndNavigate = () => {
    logoutUser()
    setUser(null)
    navigate(Routes.LoginPath.path)
  }

  const navigateToLoginPage = () => {
    navigate(Routes.LoginPath.path)
  }

  return (
    <StyledContainer>
      <StyledLogoContainer to={Routes.HomePath.path}>The NewsHubConnect</StyledLogoContainer>
      {user? <StyledLogoutButton onClick={logoutAndNavigate} /> :<StyledLoginButton onClick={navigateToLoginPage} />}
    </StyledContainer>
  )
}

export default WebSiteLogo