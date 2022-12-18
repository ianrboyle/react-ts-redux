
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { LoginPage } from './components/forms/LoginPage';
import { RegisterPage } from './components/forms/RegisterPage';
import NavBar from './components/NavBar';
import { LoginForm } from './components/auth-components/LoginForm';
import { UserComponent } from './components/UserComponent';
import { ErrorPage } from './components/auth-components/ErrorPage';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>

        <Route path="/login" element={<LoginPage formName="Login"/>} />
        <Route path="/register" element={<RegisterPage formName="Register"/>} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/user" element={<UserComponent />} />
        </Routes>

    </div>
  );
}

export default App;
