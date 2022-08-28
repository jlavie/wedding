import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUpModal from './modal/SignUpModal';
import Navbar from './Navbar';

const Navigation = () => {
  return (
    <>
      <SignUpModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} >
          <Route path="/private/private-home" element={<PrivateHome />} /> 

        </Route>
      </Routes>
    </>
    
  )
}

export default Navigation;