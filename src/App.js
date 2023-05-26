import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate,useNavigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import LoginPage from './components/LoginPage';
import AdminRoutes from './components/AdminRoutes';
import URoutes from './components/URoutes';

import './App.css';

library.add(fab, fas, far);


const ProtectedRoute = ({ children }) => {
  const user=localStorage.getItem("localuser")
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const handleLogin = (isValidLogin, username) => {
    if (isValidLogin) {
      setIsLoggedIn(true);
      setIsAdmin(true); 
      
    }
  };

  const handleLogout = () => {
    
    console.log("LOGGED OUT!!!");
  };

  return (
    <div>
      
      <Router>
        <Routes>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin}/>} />
        <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminRoutes />
          </ProtectedRoute> }/>

          <Route path="/*" element={<URoutes />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
