import React from 'react'
import Home from './components/Home'
import Layout from './components/Layout'

import Contact from './components/Contact'
import NoPage from './components/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebDevelopment from './components/itSolutions/WebDevelopment'
import AppDevelopment from './components/itSolutions/AppDevelopment'
import AISolutions from './components/itSolutions/AISolutions'
import BlogDetails from './components/blog/BlogDetails'
import BlogList from './components/blog/BlogList'


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
