import React from 'react'
import Home from './components/Home'
import Layout from './components/Layout'
import Blog from './components/Blog'
import Contact from './components/Contact'
import NoPage from './components/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebDevelopment from './components/services/WebDevelopment'
import AppDevelopment from './components/services/AppDevelopment'
import AISolutions from './components/services/AISolutions'


function App() {


  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services/WebDevelopment" element={<WebDevelopment />} />
            <Route path="services/AppDevelopment" element={<AppDevelopment />} />
            <Route path="services/AISolutions" element={<AISolutions />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
