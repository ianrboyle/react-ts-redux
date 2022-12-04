import React, { ChangeEvent, FormEvent } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { ILoginProps } from '../../models/login.model';
import { addLoginParams, changePassword, changeUserName, IUserModel } from '../../store/slices/authSlice';
import { IState, useRegisterUserQuery } from '../../store/store';




//Auth Form will set the username and password - no fetching
export const AuthForm = ({formName, isRegistration}: ILoginProps) => {
  const { username, password } = useSelector((state: IState )=> {
    return{
      username: state.user.username,
      password: state.user.password
    }
  })
  const dispatch = useDispatch();
  const handleLogin = (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    const loginParams: IUserModel = {
      username,
      password,
      loginAttempted: true,
      isRegistration: isRegistration
    }
    dispatch(addLoginParams(loginParams))
  }

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const usernameChangeAction: IUserModel = {
      username: event.target.value,
      password: '',
      loginAttempted: false,
      isRegistration: undefined
    }
    dispatch(changeUserName(usernameChangeAction))
  }
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordChangeAction: IUserModel = {
      username: '',
      password: event.target.value,
      loginAttempted: false,
      isRegistration: undefined
    }
    dispatch(changePassword(passwordChangeAction))
  }
  
    return (
    <div className="car-form panel">
    <h4 className="subtitle is-3">{formName}</h4>
    <form onSubmit={handleLogin} action="">
    <div className='field-group'>
      <div className='field'>
        <label className='label'>Username</label>
          <input className='input is-expanded' type="text" value={username} onChange={handleUserNameChange}/>
      </div>
      <div className='field'>
        <label className='label'>Password</label>
          <input className='input is-expanded' type="text" value={password} onChange={handlePasswordChange}/>
      </div>
    </div>
    <button>Submit</button>
    </form>
  </div>
  )
}