import React from 'react';
import FooterBanner from '../footer/FooterBanner';

const Contact = () => {
  return (
    <>
      {/* Hero Image with Text Overlay */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/img3.jpg"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Text Overlay */}
        <div className="relative z-10  text-center text-white flex flex-col items-center justify-center h-full">
          <p className="text-blue-400 uppercase tracking-widest font-medium">
              Best IT Solution Provider
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight border-b-4 pb-2 inline-block">
              Contact Us
            </h1>
            <p className="mt-2 text-lg">
              We look forward to hearing from you!
            </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="min-h-[50vh] w-full bg-gray-100 flex flex-col md:flex-row p-6 md:p-16 gap-8">
        {/* Contact Form */}
        <div className="md:w-1/2 w-full bg-white shadow-lg rounded-xl p-6 md:p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="md:w-1/2 w-full h-[400px] md:h-auto rounded-xl overflow-hidden shadow-lg ">
          <iframe
            title="Company Location"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7106.3238948843655!2d83.83771707796076!3d27.056635633029614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399409869f91ab9f%3A0x7f7f136a03425bfe!2sijekerTech!5e0!3m2!1sen!2sin!4v1754737717132!5m2!1sen!2sin"
          ></iframe>
        </div>
        
      </section>
      <FooterBanner />
    </>
  );
};

export default Contact;
