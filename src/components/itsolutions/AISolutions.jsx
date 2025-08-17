import React from 'react'
import FooterBanner from '../footer/FooterBanner'
import { Brain, Cpu, Code, Bot, LineChart, Lock } from "lucide-react";

function AISolutions() {
  const services = [
    {
      title: "AI Chatbot Development",
      desc: "Custom conversational AI solutions that understand and respond naturally, enhancing customer engagement.",
      icon: Bot,
    },
    {
      title: "Machine Learning Models",
      desc: "Training and deployment of predictive models for analytics, forecasting, and automation.",
      icon: Brain,
    },
    {
      title: "Computer Vision",
      desc: "AI-powered image and video recognition systems for security, retail, and automation.",
      icon: Cpu,
    },
    {
      title: "Natural Language Processing",
      desc: "Extract insights from text, perform sentiment analysis, and automate text-based tasks.",
      icon: Code,
    },
    {
      title: "AI for Data Analytics",
      desc: "Transform raw data into actionable intelligence using advanced AI algorithms.",
      icon: LineChart,
    },
    {
      title: "AI Security Solutions",
      desc: "Detect anomalies, prevent fraud, and secure systems with AI-based monitoring.",
      icon: Lock,
    },
  ];

  return (
    <>
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          AI Development Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Empower your business with next-gen Artificial Intelligence solutions tailored to your needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 animate-slideUp"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <service.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center animate-fadeIn">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Build Your AI Solution?
        </h2>
        <p className="text-gray-600 mb-6">
          Let’s bring your AI vision to life. Contact us to discuss your project today.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </div>
      <FooterBanner />
    </>
  )
}

export default AISolutions

