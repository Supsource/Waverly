import React from 'react'
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home_Page from './pages/Home.jsx';
import Login_Page from './pages/Login.jsx';
import Register_Page from './pages/Register.jsx';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home_Page />} />
      <Route path='/login' element={<Login_Page />} />
      <Route path='/register' element={<Register_Page />} />
    </Routes>
  )
}

export default App
