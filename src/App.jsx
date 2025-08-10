import React from 'react'

import Layout from './components/Home/Layout'

import Contact from './components/contact/Contact'
import NoPage from './components/nopage/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebDevelopment from './components/itSolutions/WebDevelopment'
import AppDevelopment from './components/itSolutions/AppDevelopment'
import AISolutions from './components/itSolutions/AISolutions'
import BlogDetails from './components/blog/BlogDetails'
import BlogList from './components/blog/BlogList'
import Home from './components/Home/Home'
import AboutUs from './components/company/AboutUs'
import Careers from './components/company/Careers'
import OurTeam from './components/company/OurTeam'
import Faq from './components/pages/Faq'
import Testimonials from './components/pages/Testimonials'


function App() {


  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blog/BlogList' element={<BlogList />} />
            <Route path='blog/BlogDetails' element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="company/about" element={<AboutUs />} />
            <Route path="company/careers" element={<Careers />} />
            <Route path="company/our-team" element={<OurTeam />} />
            <Route path="pages/faq" element={<Faq />} />
            <Route path="pages/testimonials" element={<Testimonials />} />
            <Route path="itSolutions/WebDevelopment" element={<WebDevelopment />} />
            <Route path="itSolutions/AppDevelopment" element={<AppDevelopment />} />
            <Route path="itSolutions/AISolutions" element={<AISolutions />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
