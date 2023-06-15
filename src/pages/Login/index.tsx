import React from 'react'
import { HeaderContainer, HeaderText, InnerContainer, SmallText, StyledContainer } from './styles'
import LoginForm from '../../components/Forms/LoginForm'

function Login() {
    return (
        <StyledContainer>
            <HeaderContainer>
                <HeaderText> Welcome <br /> Back </HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
            <InnerContainer>
                <LoginForm />
            </InnerContainer>
        </StyledContainer>
    )
}

export default Login