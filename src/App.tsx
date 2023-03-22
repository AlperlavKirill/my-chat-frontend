import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Welcome to the first page</div>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/user/:username" element={<UserPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
