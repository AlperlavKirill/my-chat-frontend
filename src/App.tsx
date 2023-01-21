import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Welcome to the first page</div>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>  
      </Routes>
    </>
  )
}

export default App;
