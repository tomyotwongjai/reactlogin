import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import Login from './login-module/Login';
import Signup from './Signup-module/Signup';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
