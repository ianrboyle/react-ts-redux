import React from 'react'
import { useRegisterUserQuery } from '../../store/store';
import { ErrorPage } from './ErrorPage';
import { ILoginProps } from './LoginForm';




export const AuthForm = ({formName, reduxQueryName}: ILoginProps) => {

  
  const username = "ianB"
  const password = "password"
  const {data, error, isLoading} = useRegisterUserQuery({username, password});
  


  console.log("data: ",data)
  console.log("error: ", error)
  console.log("isLoading: ",isLoading)
  const handleLogin = () => {

  }

  const handleUserNameChange = () => {

  }
  const handlePasswordChange = () => {

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