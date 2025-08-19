import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <section className='  bg-blue-10'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="p-4  md:p-12">
          <h1 className="font-bold text-4xl text-center">ijekerTech</h1>
          <p className="text-gray-600 text-center">We craft high-performance digital experienced that drive real bussiness result.</p>
          <div className="flex gap-8 text-2xl mt-2 ">
            <a href="https://github.com/ijekertech"><FaGithub className='text-green-500 font-bold target-blank' /></a>
            <a href="https://facebook.com/profile.php?id=61579048111215"><FaFacebook className='text-green-500 font-bold' /></a>
            <a href="https://www.linkedin.com/company/ijekertech"><FaLinkedinIn className='text-green-500 font-bold' /></a>
            <a href="https://instagram.com/ijekertech"><FaInstagram className='text-green-500 font-bold' /></a>
            <a href="https://twitter.com/ijekertech"><FaXTwitter className='text-green-500 font-bold' /></a>
          </div>
          <hr className='mt-4' />
        </div>
        <div className="p-4 md:p-12">
          <h2 className="font-bold ">Quick Links</h2>

          <Link to="/" className="text-gray-600 flex">Home</Link>
          <Link to="about" className="text-gray-600 flex">About</Link>
          <Link to="blog" className="text-gray-600 flex">Blog</Link>
          <Link to="portfolio" className="text-gray-600 flex">Portfolio</Link>
          <Link to="contact" className="text-gray-600 flex">Contact</Link>
        </div>
        <div className="p-4 md:p-12">
          <Link to="services"><h2 className='font-bold'>Services</h2></Link>
          <Link to="services/ux-ui-design"><li className="text-gray-600 list-none">UX/UI Design</li></Link>
          <Link to="services/brand-design"><li className="text-gray-600 list-none">Brand Design</li></Link>
          <Link to="services/webflow-development"><li className="text-gray-600 list-none">Webflow Development</li></Link>
          <Link to="services/no-code-development"><li className="text-gray-600 list-none">No-Code Development</li></Link>
        </div>
        <div className="p-4 md:p-12">
          <h2 className='font-bold my-2'>Get the Latest Inspiration</h2>
          <input type="email" name="" id="" required placeholder='Enter your email *' className='p-2 border rounded my-2 w-full' />
          <button className='font-bold bg-black text-center text-white p-2 w-full rounded cursor-pointer hover:bg-gray-400' > Subscribe Now</button>
        </div>

      </div>
      <hr />
     
    </section>
     <footer className="bg-gray-900 text-gray-400 text-center py-4">
        © {new Date().getFullYear()} ijekerTech. All rights reserved.
      </footer>
      </>

  )
}
