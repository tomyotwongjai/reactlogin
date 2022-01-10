import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to logout');
    }
    setLoading(false);
  };

  return (
    <div className='chat-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>ChatApp</div>
        {error && <p id='error'>{error}</p>}
        {/* <strong>Email:</strong> {currentUser.email} */}
        <Link to='/update-profile' className='btn'>
          Update Profile
        </Link>
        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
