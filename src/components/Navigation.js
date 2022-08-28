import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUpModal from './modal/SignUpModal';
import Navbar from './Navbar';

const Navigation = () => {
  return (
    <>
      <Navbar />
      <SignUpModal />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
    
  )
}

export default Navigation;