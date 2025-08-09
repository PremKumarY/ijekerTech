import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavbarBanner from './navbar/NavbarBanner'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen mx-1 ">
      <NavbarBanner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
     <Footer />
    </div>
  )
}

export default Layout
