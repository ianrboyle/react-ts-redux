import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
export const BasicForm = () => {
  return (
      <form action="">
        <Typography>
           <TextField id="outlined-basic" label="Username" variant="outlined" />

        </Typography>
    <Typography>
    <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
    </Typography>
  
      <Button variant="outlined">Login</Button>
      </form>

  )
}
