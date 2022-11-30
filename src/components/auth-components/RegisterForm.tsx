import React from 'react'
import { AuthForm } from './AuthForm';
import { ILoginProps } from './LoginForm';



export const RegisterForm = () => {
  const loginProps: ILoginProps = {
    formName: "Register",
  reduxQueryName: "Regiseter"
  }
  return (
    <AuthForm formName={loginProps.formName} reduxQueryName={loginProps.reduxQueryName}/>
  )
}
