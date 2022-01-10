import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ Component }) {
  const { currentUser } = useAuth();

  return currentUser ? <Component /> : <Navigate to='/login' />;
}
