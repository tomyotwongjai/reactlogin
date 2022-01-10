import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('check your inbox for further instructions');
    } catch {
      setError('Failed to reset Password');
    }
    setLoading(false);
  }

  return (
    <div className='signup-container'>
      <h1>Reset Password</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type='email'
          className='input-box'
          placeholder='Email Address'
          required
        />
        <button disabled={loading} type='submit' className='sign-btn'>
          Reset Password
        </button>
        <p>
          <Link to='/login'>Login</Link>
        </p>
        <p>
          Need an account?<Link to='/signup'>signup</Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
