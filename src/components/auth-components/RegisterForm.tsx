import React from 'react'
import { AuthForm } from './AuthForm';
import { ILoginProps } from '../../models/login.model';



export const RegisterForm = () => {
  const loginProps: ILoginProps = {
    formName: "Register",
    isRegistration: true
  }
  return (
    <AuthForm formName={loginProps.formName} isRegistration={loginProps.isRegistration}/>
  )
}
