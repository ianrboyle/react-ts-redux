
import { AppBar } from '@mui/material';
import './App.css';
import { Auth } from './components/auth-components/Auth';
import { Car } from './components/car-components/Car';
import { BasicForm } from './components/forms/BasicForm';
import FormCard from './components/forms/FormCard';
import { LoginPage } from './components/forms/LoginPage';
import { RegisterPage } from './components/forms/RegisterPage';
import NavBar from './components/NavBar';
import { Route } from './components/Route';

function App() {
  return (
    <div className="App">
        <NavBar />
        <LoginPage formName="Login"/>


          <RegisterPage formName="Register" />

    </div>
  );
}

export default App;
