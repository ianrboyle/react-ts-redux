import React from 'react'
import { ILoginProps } from '../../models/login.model'
import { AuthForm } from './AuthForm'


export const LoginForm = () => {
  const loginProps: ILoginProps = {
    formName: "Login",
    isRegistration: false
  }
  return (
    <AuthForm formName={loginProps.formName} isRegistration={loginProps.isRegistration}/>
  )
}
