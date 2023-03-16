import React from 'react'
import  useAuth  from '../components/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const { cureentUser } = useAuth();

  return cureentUser ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute