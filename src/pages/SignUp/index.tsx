import React from 'react'
import { HeaderContainer, HeaderText, InnerContainer, SmallText } from './styles'
import SignUpForm from '../../components/Forms/SignUpForm'

function SignUp() {
    return (
        <>
            <HeaderContainer>
                <HeaderText> Create an <br/> Account </HeaderText>
                <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
            <InnerContainer>
                <SignUpForm />
            </InnerContainer>
        </>
    )
}

export default SignUp