import React, { ChangeEvent, useState, ChangeEventHandler, FormEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { IUserModel } from '../../store/slices/authSlice';
import AuthService from "../../services/auth.service";

type Props = {};

type State = {
  redirect: string | null,
  username: string,
  password: string,
  loading: boolean,
  message: string
};
export const BasicForm = () => {
 

  const [loginInfo, setLoginInfo] = useState<IUserModel>();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginInfo?.username && loginInfo?.password){
      console.log("did this get hit?")
      AuthService.login(loginInfo.username, loginInfo.password)
    }
    console.log(loginInfo)
  }
  const handleUserNameInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setLoginInfo({
      username: event.target.value,
      password: loginInfo?.password
    })
   
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setLoginInfo({
      username: loginInfo?.username,
      password: event.target.value
    })
  }
  return (

      <form onSubmit={handleLogin} action="">
        <Typography>
           <TextField id="username" name="username" label="Username" variant="filled" onChange={handleUserNameInput}/>

        </Typography>
        <Typography>
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            name="password"
            onChange={handlePasswordInput}
          />
        </Typography>
  
      <Button type="submit" variant="outlined">Login</Button>
      </form>

  )
}
