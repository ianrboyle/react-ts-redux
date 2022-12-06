
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { LoginPage } from './components/forms/LoginPage';
import { RegisterPage } from './components/forms/RegisterPage';
import NavBar from './components/NavBar';
import { LoginForm } from './components/auth-components/LoginForm';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>

        <Route path="/login" element={<LoginPage formName="Login"/>} />
        <Route path="/register" element={<RegisterPage formName="Register"/>} />
        </Routes>

    </div>
  );
}

export default App;
