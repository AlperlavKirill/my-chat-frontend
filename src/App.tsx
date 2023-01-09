import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<div>Hello</div>}>

        </Route>
      </Routes>
    </>
  )
}

export default App;
