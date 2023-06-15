import React, { useState } from 'react'
import { InputsContainer, BoxContainer, FormContainer, BoldLink, Input, SubmitButton } from '../common'
import useSwitch from '../../../hooks/useSwitch'
import { useNavigate } from 'react-router-dom'
import { register } from '../../../services/auth.services'
import useMessages from '../../../hooks/useMessages'
import { AxiosError } from 'axios'
import { LoginPath } from '../../../routes'

interface FormDataType { name: string, email: string, password: string, password_confirmation: string }

interface SignUpError {
  errors: { email: string }[]
  message: string
}

function SignUpForm() {
  const { playExpandingAnimation } = useSwitch()
  const formData: FormDataType = { name: "", email: "", password: "", password_confirmation: "" }
  const [responseBody, setResponseBody] = useState<FormDataType>(formData)
  const navigate = useNavigate()
  const navigateAfterAnimation = () => {
    playExpandingAnimation()
    navigate(LoginPath.path)
  }
  const { showMessage } = useMessages()

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, password, password_confirmation } = responseBody
    try {
      await register(name, email, password, password_confirmation)
      showMessage('User created successfully', 'success')
    } catch (error) {
      const axiosError = error as AxiosError<SignUpError>
      if (axiosError.response?.data.message) {
        showMessage(axiosError.response?.data.message, 'error')
      }
    }

  }

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setResponseBody({ ...responseBody, [name]: value })
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={formSubmit}>
        <InputsContainer>
          <Input type="text" name="name" placeholder="Full Name" onChange={(e) => inputChangeHandler(e)} />
          <Input type="email" name="email" placeholder="Email" onChange={(e) => inputChangeHandler(e)} />
          <Input type="password" name="password" placeholder="Password" onChange={(e) => inputChangeHandler(e)} />
          <Input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={(e) => inputChangeHandler(e)} />
        </InputsContainer>
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <p>Already have an account?<BoldLink to="#" onClick={navigateAfterAnimation}>Sign In</BoldLink></p>
      </FormContainer>
    </BoxContainer>
  )
}

export default SignUpForm
