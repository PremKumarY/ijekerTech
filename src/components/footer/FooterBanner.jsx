import React from 'react'
import { useNavigate } from 'react-router-dom'

function FooterBanner() {
    const navigate = useNavigate();
    return (
        <>
            {/* Hero Image with Text Overlay */}
            <div className="relative w-full h-[40vh] overflow-hidden">
                {/* Background Image */}
                <img
                    src="/contact.jpg"
                    alt="Hero"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Text Overlay */}
                <div className="relative z-10  text-center text-white flex flex-col items-center justify-center h-full">
                    <p className="text-blue-400 uppercase tracking-widest font-medium">
                        We are here to answer your questions 24/7
                    </p>
                    <p className="mt-2 text-lg">
                        NEED A CONSULTATION?
                    </p>
                    <button onClick={() => navigate("/contact")} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        </>
    )
}

export default FooterBanner
