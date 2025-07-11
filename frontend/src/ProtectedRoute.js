import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token'); // 👈 Check token

  if (!token) {
    return <Navigate to="/login" replace />; // 👈 Redirect if not logged in
  }

  return children; // 👈 Allow access if token exists
}

export default ProtectedRoute;
