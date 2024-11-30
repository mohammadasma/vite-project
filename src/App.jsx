import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './com/pro';
import OrderPage from './comp2/order';
// import TrackPage from './TrackPage';
// import LoginPage from './LoginPage';
// import RegisterPage from './RegisterPage';

import TrackPage from './comp2/TrackPage';
import LoginPage from './comp3/Login';
import RegisterPage from './comp3/Register';


function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/order" element={<OrderPage/>} />
        <Route path="/track" element={<TrackPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
