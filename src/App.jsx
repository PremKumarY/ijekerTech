import React from 'react'

import Layout from './components/home/Layout'
import Contact from './components/contact/Contact'
import NoPage from './components/nopage/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebDevelopment from './components/itsolutions/WebDevelopment'
import AppDevelopment from './components/itsolutions/AppDevelopment'
import AISolutions from './components/itsolutions/AISolutions'
import AllServices from './components/itsolutions/AllServices'
import BlogDetails from './components/blog/BlogDetailsPage'
import BlogList from './components/blog/BlogPage'
import Home from './components/home/Home'
import AboutUs from './components/company/AboutUs'
import Careers from './components/company/Careers'
import OurTeam from './components/company/OurTeam'
import Faq from './components/pages/Faq'
import Testimonials from './components/pages/Testimonials'
import CmsPage from './components/cms/CmsPage'
import Training from './components/cms/Training'
import Teaching from './components/cms/courses/Courses'
import Internship from './components/cms/Internship'
import InternshipPage from './components/cms/Register'
import Profile from './components/cms/account/Profile'
import Settings from './components/cms/account/Settings'
import CoursesLandingPage from './components/cms/courses/CoursesLandingPage'
import Register from './components/cms/Register'
import ConnectCard from './components/ConnectCard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="connect" element={<ConnectCard />} />
            <Route path="blog/BlogPage" element={<BlogList />} />
            <Route path="pages/testimonials" element={<Testimonials />} />
            <Route path="itsolutions/WebDevelopment" element={<WebDevelopment />} />
            <Route path="itsolutions/AppDevelopment" element={<AppDevelopment />} />
            <Route path="itsolutions/AISolutions" element={<AISolutions />} />
            <Route path="itsolutions/AllServices" element={<AllServices />} />
            <Route path="blog/BlogDetailsPage/:id" element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="company/about" element={<AboutUs />} />
            <Route path="company/careers" element={<Careers />} />
            <Route path="company/our-team" element={<OurTeam />} />
            <Route path="pages/faq" element={<Faq />} />
            <Route path="cms/cms-page" element={<CmsPage />} />
            <Route path="cms/cms-page/training" element={<Training />} />
            <Route path="cms/cms-page/courses" element={<Teaching />} />
            <Route path="cms/cms-page/internship" element={<Internship />} />
            <Route path="apply-internship" element={<InternshipPage />} />
            <Route path="cms/account/settings" element={<Settings />} />
            <Route path="cms/account/profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="cms/cms-page/courses/courseslandingpage" element={<CoursesLandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
