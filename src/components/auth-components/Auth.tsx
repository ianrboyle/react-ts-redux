import React from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { Welcome } from './Welcome';

export const Auth = () => {
  const isLoggedIn = true;

  return isLoggedIn ? 
    <div>
      <LoginForm />
      <RegisterForm />
    </div> : 
    <div>
      <Welcome />
    </div>;
}
