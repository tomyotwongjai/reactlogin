import React, { useRef, useState } from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useAuth } from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to Login');
    }
    setLoading(false);
    console.log(emailRef, passwordRef);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='signup-container'>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type='email'
          className='input-box'
          placeholder='Email Address'
          required
        />
        <input
          ref={passwordRef}
          type='password'
          className='input-box'
          placeholder='Password'
          required
        />
        <button disabled={loading} type='submit' className='sign-btn'>
          Login
        </button>
        <hr />
        <p className='or'>OR</p>
        <button onClick={signInWithGoogle} className='login-button google'>
          <GoogleOutlined />
          Login With Google
        </button>
        <p>
          Need an account? <Link to='/signup'>signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
