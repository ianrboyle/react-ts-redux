import React from 'react'
import { AuthForm } from './AuthForm'

export interface ILoginProps {
    formName: string;
    reduxQueryName: string;
  
}
export const LoginForm = () => {
  const loginProps: ILoginProps = {
    formName: "Login",
    reduxQueryName: "Login"
  }
  return (
    <AuthForm formName={loginProps.formName} reduxQueryName={loginProps.reduxQueryName}/>
  )
}
