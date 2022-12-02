import React from 'react'
import { BasicForm } from './BasicForm'
import FormCard from './FormCard'

export const LoginPage = () => {
  const buttonText: string = 'Login'
  return (
    <FormCard buttonText={buttonText} />
  )
}
