import React, { useRef, useState } from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import './signup.css';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useAuth } from '../../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // if (signup || loading) return <Loader />;

  return (
    <div className='signup-container'>
      <h1>Sign-up & Chats</h1>
      {error && <p id='error'>{error}</p>}
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
        <input
          ref={passwordConfirmRef}
          type='password'
          className='input-box'
          placeholder='Confirm Password'
          required
        />
        <button type='submit' className='sign-btn'>
          Sign up
        </button>
        <hr />
        <p className='or'>OR</p>
        <button
          disabled={loading}
          onClick={signInWithGoogle}
          className='login-button google'
        >
          <GoogleOutlined />
          Login With Google
        </button>
        <p>
          Already hav an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
