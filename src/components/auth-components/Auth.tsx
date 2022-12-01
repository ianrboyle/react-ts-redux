import React from 'react'
import { IState, useLoginUserQuery } from '../../store/store';
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { Welcome } from './Welcome';
import { useSelector } from 'react-redux';

export const Auth = () => {
  const { loginAttempted } = useSelector((state: IState )=> {
    return{
      loginAttempted: state.user.loginAttempted
    }
  })
  // const {data, error, isLoading} = useLoginUserQuery({username, password});
  // let isLoggedIn = false;
  // if (data) {
  //   isLoggedIn = !isLoggedIn;
  // }

  return !loginAttempted ? 
    <div>
      <LoginForm />
      <RegisterForm />
    </div> : 
    <div>
      <Welcome />
    </div>;
}
