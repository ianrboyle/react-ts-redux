import React from 'react'
import { ILoginProps } from '../../models/login.model'
import { Route } from '../Route'
import { BasicForm } from './BasicForm'
import FormCard from './FormCard'

export const RegisterPage = (loginProps: ILoginProps) => {
  console.log("REGISTER PAGE: ", loginProps.formName)
  return (
    <Route path="/register">
    <FormCard formName={loginProps.formName} />
    </Route>
  )
}
