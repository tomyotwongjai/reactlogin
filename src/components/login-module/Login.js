import React, { useRef, useState } from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useAuth } from '../../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to Login');
    }
    setLoading(false);
  }

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
          Need an account?<Link to='/signup'>signup</Link>
        </p>
      </form>
      <p>
        <Link to='/forgot-password'>Forgot Password?</Link>
      </p>
    </div>
  );
}

export default Login;
