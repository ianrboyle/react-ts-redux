import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { LoginForm } from './auth-components/LoginForm';
import { RegisterForm } from './auth-components/RegisterForm';
import  AuthService from '../services/auth.service'

export default function NavBar() {

  AuthService.getCurrentUser();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">
            <Link to='/login'>
              Login
            </Link>
            </Button>
         
              <Button color="inherit"><Link to='/register'>
              Register
            </Link></Button>
            <Button color="inherit" onClick={() => AuthService.logout()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}