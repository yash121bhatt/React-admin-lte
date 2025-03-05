import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout/Layout'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Login from './authentication/Login'
import Register from './authentication/Register'
import ForgotePassword from './authentication/Forgote-password'
import ResetPassword from './authentication/Reset-password'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotePassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
