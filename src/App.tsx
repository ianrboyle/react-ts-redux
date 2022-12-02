
import { AppBar } from '@mui/material';
import './App.css';
import { Auth } from './components/auth-components/Auth';
import { Car } from './components/car-components/Car';
import { BasicForm } from './components/forms/BasicForm';
import FormCard from './components/forms/FormCard';
import { LoginPage } from './components/forms/LoginPage';
import { RegisterPage } from './components/forms/RegisterPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <LoginPage />
        <RegisterPage />
    </div>
  );
}

export default App;
