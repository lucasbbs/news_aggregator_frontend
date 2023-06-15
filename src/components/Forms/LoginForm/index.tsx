import React, { useState } from 'react'
import { InputsContainer, BoxContainer, FormContainer, MutedLink, BoldLink, Input, SubmitButton } from '../common'
import useSwitch from '../../../hooks/useSwitch'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useAuth from '../../../hooks/useAuth'
import { getUserData } from '../../../services/user.services'
import { login } from '../../../services/auth.services'
import useMessages from '../../../hooks/useMessages'
import { HomePath, RegisterPath } from '../../../routes'


function LoginForm() {
  const { setUser } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { playExpandingAnimation } = useSwitch()
  const navigate = useNavigate()
  const navigateAfterAnimation = () => {
    playExpandingAnimation()
    navigate(RegisterPath.relativePath)
  }
  const { showMessage, clearMessages } = useMessages()

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      await axios.get('/sanctum/csrf-cookie')
      const { data } = await login(email, password)
      setUser(await getUserData())
      localStorage.setItem('token', data.token)
      showMessage('User logged in successfully', 'success')
      setTimeout(() => {
        clearMessages()
        navigate(HomePath.relativePath)
      }, 1500)
    } catch (error) {
      showMessage('Invalid credentials', 'error')
    } finally {
      setLoading(false)
    }
  }

  const { setLoading } = useAuth()

  return (
    <BoxContainer>
      <FormContainer onSubmit={formSubmit}>
        <InputsContainer>
          <Input type="email" name='email' placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" name='password' placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </InputsContainer>
        <MutedLink to="#">Forgot Password?</MutedLink>
        <SubmitButton type="submit">Login</SubmitButton>
        <p>Don't have an account?<BoldLink to="#" onClick={navigateAfterAnimation}>Sign Up</BoldLink></p>
      </FormContainer>
    </BoxContainer>
  )
}

export default LoginForm