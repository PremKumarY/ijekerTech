import React, { useState } from "react";
import FooterBanner from '../footer/FooterBanner'

function Faq() {
 
     const faqs = [
    {
      question: "What does ijekerTech do?",
      answer:
        "We provide IT solutions including AI/ML development, web & mobile app development, and technical consultancy services."
    },
    {
      question: "How can I apply for a job?",
      answer:
        "You can apply directly through our Careers page or send your CV to hr.apanatime@gmail.com."
    },
    {
      question: "Do you offer remote work?",
      answer:
        "Yes, most of our roles support remote or hybrid work arrangements depending on the position."
    },
    {
      question: "Do you offer internships?",
      answer:
        "Yes, we offer internships in areas like Web Development, AI/ML, and Data Science."
    },
    {
      question: "What technologies do you use?",
      answer:
        "We primarily work with React, Node.js, MongoDB, Python, and various AI/ML frameworks."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Here are some of the most common questions we receive from our community and clients.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
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

export default Faq
