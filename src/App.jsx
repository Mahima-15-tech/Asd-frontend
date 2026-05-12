import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Layout from './layouts/Layout'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Signup from './pages/Signup'
import UserAuth from './Auth/UserAuth'
import B2BAuth from './Auth/B2BAuth'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLogin from './pages/admin/auth/AdminLogin'
import Dashboard from './pages/Dashboard'
import B2BDashboard from './pages/B2Bdasboard'
import UserDashboard from './pages/Userdashboard'

function App() {

  return (
    <div>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='signup' element={<Signup/>} />
          <Route path='user-auth' element={<UserAuth/>} />
          <Route path='b2b-auth' element={<B2BAuth/>} />
          <Route path='admin-dashboard' element={<AdminDashboard/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='admin-login' element={<AdminLogin/>} />
          <Route path='b2b-dashboard' element={<B2BDashboard/>} />
            <Route path='user-dashboard' element={<UserDashboard/>} />

          

        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
