import React from 'react'

import { Outlet } from 'react-router-dom'

import NavbarBanner from '../navbar/NavbarBanner'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

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
