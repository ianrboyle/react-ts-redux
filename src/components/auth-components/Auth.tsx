import React from 'react'
import { IState, useLoginUserQuery } from '../../store/store';
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { Welcome } from './Welcome';
import { useSelector } from 'react-redux';

export const Auth = () => {
  const { username, password } = useSelector((state: IState )=> {
    return{
      username: state.user.username,
      password: state.user.password
    }
  })
  const {data, error, isLoading} = useLoginUserQuery({username, password});
  let isLoggedIn = false;
  if (data) {
    isLoggedIn = !isLoggedIn;
  }

  return !isLoggedIn ? 
    <div>
      <LoginForm />
      <RegisterForm />
    </div> : 
    <div>
      <Welcome />
    </div>;
}
