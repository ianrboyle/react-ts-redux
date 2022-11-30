import React from 'react'

type FormName = {
  formName: string;
}
export const AuthForm = (props: FormName) => {
  const username = "sdfs"
  const password = "fasdf"
  const handleLogin = () => {

  }

  const handleUserNameChange = () => {

  }
  const handlePasswordChange = () => {

  }
  return (
    <div className="car-form panel">
    <h4 className="subtitle is-3">{props.formName}</h4>
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