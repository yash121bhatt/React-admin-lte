import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../page/Header'
import Footer from '../page/Footer'
import Asidebar from '../page/Asidebar'
import RightSideBar from '../page/Right-side-bar'

const Layout = () => {
  return (
    <>
     <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Asidebar />
      <RightSideBar />
      <Footer />
    </>

  )
}

export default Layout
