import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout/Layout'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
