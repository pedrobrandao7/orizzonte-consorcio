import React from 'react'

import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    return (
        <a
            href="https://wa.me/31998443042"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
        >
            <FaWhatsapp className="w-6 h-6" />
        </a>
    )
}

export default Whatsapp