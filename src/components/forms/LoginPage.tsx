import React from 'react'
import { ILoginProps } from '../../models/login.model'
import { Route } from '../Route'

import { BasicForm } from './BasicForm'
import FormCard from './FormCard'


export const LoginPage = (loginProps: ILoginProps) => {
  console.log("LOGIN RENDERED:", loginProps.formName)
  return (
    <div>
      <Route path="/login">

      <FormCard formName={loginProps.formName} />
      </Route>

    </div>
  )
}
