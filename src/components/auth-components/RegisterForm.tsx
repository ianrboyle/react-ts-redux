import React from 'react'
import { AuthForm } from './AuthForm';
import { ILoginProps } from './LoginForm';



export const RegisterForm = () => {
  const loginProps: ILoginProps = {
    formName: "Register",
    isRegistration: true
  }
  return (
    <AuthForm formName={loginProps.formName} isRegistration={loginProps.isRegistration}/>
  )
}
