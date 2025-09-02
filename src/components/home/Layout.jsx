import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarBanner from '../navbar/NavbarBanner'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ChatPopup from '../chat/ChatPopup'
import { SpeedInsights } from '@vercel/speed-insights/react'


function Layout() {
  return (
    <div className="flex flex-col min-h-screen mx-1 ">
      <NavbarBanner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ChatPopup />
      <Footer />
      {/* Speed Insights panel */}
      <SpeedInsights />
    </div>
  )
}

export default Layout
