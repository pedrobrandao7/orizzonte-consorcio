import React from 'react'

import { FaArrowCircleRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


const SectionContato = () => {
    return (
        <div className="font-custom-regular text-white font-thin mt-30 flex flex-col mx-4 lg:items-center pb-20">
            <div className="flex flex-col justify-center items-center lg:max-w-auto gap-5">

                {/* TITULO*/}

                <div className="flex flex-row lg:justify-center ">
                    <h1 className="font-custom-thin text-5xl text-thin ">
                        Como ser <span className="font-custom-regular text-bold"> atendido?</span>
                    </h1>
                </div>

                {/* PARAGRAFO*/}

                <div className="text-sm flex  text-[--font-custom-regular]  lg:max-w-250">
                    <p>Você pode nos contatar pelo Whatsapp, Instagram, Facebook e E-mail:</p>
                </div>

                <div className='max-w-[1200px] lg:min-w-[600px]  bg-white text-black text-2xl p-5 rounded-2xl '>
                    <div className='flex justify'>
                        <FaWhatsapp className="w-6 h-6 text-white bg-green-500 p-1 rounded-full mr-3" /><h2>Atendimento via Whatsapp</h2>
                    </div>

                    <div className="bg-white text-gray-800 h-fit flex flex-col justify-center pt-5 gap-2 text-base">
                        <p className="flex gap-2"><FaArrowCircleRight/>Adicione nos seu contatos: <span className='text-bold text-xl'> (31) 99844-3042 </span></p>
                        <button><a href="https://wa.me/31998443042" target="_blank" className="text-white text-lg px-8 py-2 mb-2 block bg-gradient-to-r
                 from-green-400 to-green-500 p-3 rounded-xl shadow-lg
                  shadow-green-500/50 duration-500 hover:scale-110">Ou clique aqui</a></button>
                        
                    </div>
                </div>

                <div className='max-w-[1200px] lg:min-w-[600px]  bg-white text-black text-2xl p-5 rounded-2xl '>
                    <div className='flex justify'>
                        <FaInstagram className="w-6 h-6 text-white bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,_#d6249f_60%,_#285AEB_90%)]
                         p-1 rounded-full mr-3" /><h2>Atendimento via Instagram</h2>
                    </div>

                    <div className="bg-white text-gray-800 h-fit flex flex-col justify-center pt-5 gap-2 text-base">
                        <p className="flex gap-2 "><FaArrowCircleRight/>Envie-nos um direct: <span className='text-bold text-xl'> @orizzonteconsórcio </span></p>
                        <button><a href="https://www.instagram.com/orizzonteconsorcio/" target="_blank" className="text-black text-lg px-8 py-2 mb-2 block bg-[radial-gradient(circle_at_30%_107%,_#fdf497_0%,_#fdf497_5%,_#fd5949_45%,_#d6249f_60%,_#285AEB_90%)] p-3 rounded-xl shadow-lg
                  shadow- duration-500 hover:scale-110">Ou clique aqui</a></button>
                        
                    </div>
                </div>

                <div className='max-w-[1200px] lg:min-w-[600px]  bg-white text-black text-2xl p-5 rounded-2xl '>
                    <div className='flex justify'>
                        <FaFacebookF className="w-6 h-6 text-white bg-blue-500
                         p-1 rounded-full mr-3" /><h2>Atendimento via Facebook</h2>
                    </div>

                    <div className="bg-white text-gray-800 h-fit flex flex-col justify-center pt-5 gap-2 text-base ">
                        <p className="flex gap-2"><FaArrowCircleRight/>Envie uma mensagem: <span className='text-bold text-xl'> Orizzonte Consórcio </span></p>
                        <button><a href="https://www.facebook.com/profile.php?id=61579286785909 " target="_blank" className="text-white text-lg px-8 py-2 mb-2 block bg-gradient-to-r
                 from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg
                  duration-500 hover:scale-110">Ou clique aqui</a></button>
                        
                    </div>
                </div>

                <div className='max-w-[1200px] lg:min-w-[600px]  bg-white text-black text-2xl p-5 rounded-2xl '>
                    <div className='flex justify'>
                        <CgMail className="w-6 h-6 text-white bg-red-400
                         p-1 rounded-full mr-3" /><h2>Atendimento via E-mail</h2>
                    </div>

                    <div className="bg-white text-gray-800 h-fit flex flex-col justify-center pt-5 gap-2 text-base">
                        <p className="flex gap-2"><FaArrowCircleRight/>Envie para: <span className='text-bold text-xl'> orizzonteconsorcio<br className='lg:hidden'/>@gmail.com</span></p>
                        <button><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=orizzonteconsorcio@gmail.com&su=Contato sobre Consórcio" 
                        target="_blank" className="text-white text-lg px-8 py-2 mb-2 block bg-gradient-to-r
                 from-red-400 to-red-500 p-3 rounded-xl shadow-lg
                  duration-500 hover:scale-110">Ou clique aqui</a></button>
                        
                    </div>
                </div>



            </div>

        </div>
    )
}

export default SectionContato