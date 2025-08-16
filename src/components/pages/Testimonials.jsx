import React from 'react'
import FooterBanner from '../footer/FooterBanner'

function Testimonials() {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "CEO, TechVision Pvt Ltd",
      feedback:
        "Working with ijekerTech was an absolute pleasure. Their AI solutions transformed our workflow and increased productivity.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Singh",
      role: "Product Manager, InnovateX",
      feedback:
        "The team’s professionalism and expertise are unmatched. They delivered our project ahead of schedule with top quality.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rahul Verma",
      role: "Founder, GreenTech Solutions",
      feedback:
        "We’ve seen measurable growth in efficiency thanks to their AI and automation tools. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Here’s what our valued clients have to say about their experience with ijekerTech.
        </p>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-purple-500 mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-4 text-gray-700 italic">"{testimonial.feedback}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
        © {new Date().getFullYear()} ijekerTech. All rights reserved.
      </footer>
    </div>
      <FooterBanner />
    </>
  )
}

export default Testimonials
