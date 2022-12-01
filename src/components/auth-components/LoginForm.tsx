import React from 'react'
import { AuthForm } from './AuthForm'

export interface ILoginProps {
    formName: string;
    isRegistration: boolean
  
}
export const LoginForm = () => {
  const loginProps: ILoginProps = {
    formName: "Login",
    isRegistration: false
  }
  return (
    <AuthForm formName={loginProps.formName} isRegistration={loginProps.isRegistration}/>
  )
}
