import React from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export const Auth = () => {
  const isLoggedIn = false;

  return isLoggedIn ? 
    <div>
      <LoginForm />
    </div> : 
    <div>
      <RegisterForm />
    </div>;
}
