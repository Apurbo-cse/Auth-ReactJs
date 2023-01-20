import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SingIn";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<SignIn />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
