import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav
             transition={{duration: 0.8, delay:0.4}}
             className="bg-[#1578EA]">
                <div className="font-custom-regular font-thin h-auto flex justify-between lg:justify-around items-center shadow-xl px-5">
                    
                    {/** Logo */}

                    <div className="h-15 w-15 
                            lg:h-30 lg:w-30
                            hover:scale-110 hover:duration-300">
                        <a href="/">
                            <img src="/assets/Orizzonte.png" alt="Logo Orizzonte" className="h-auto w-auto" />
                        </a>
                    </div>

                    {/** Botões da nav (NOTEBOOK, PC)*/}

                    <div className="hidden sm:flex sm:justify-center sm:items-center">
                        <a href="/sobre" className="text-white text-lg px-4 duration-500 hover:scale-105 ">SOBRE NÓS</a>
                        <a href="/contato" className="text-white text-lg px-4 duration-500 hover:scale-105">CONTATO</a>
                        <a href="/produtos" className="text-white text-lg px-4 duration-500 hover:scale-105 ">PRODUTOS</a>
                        <a href="/simule" className="text-[#626177] text-lg px-4 bg-gradient-to-r from-amber-300 to-amber-400 p-3 rounded-xl shadow-lg shadow-amber-400/50 duration-500 hover:scale-110">SIMULE JÁ</a>
                    </div>

                    {/** Botão hidden da nav (MOBILE)*/}

                    <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden px-4 text-3xl text-white "><CiMenuBurger /></button>
                </div>

                {/** Botões hidden da nav (MOBILE)*/}

                <div className={`${isOpen ? "bg-blue-900 h-fit flex flex-col justify-center items-center opacity-100" : "h-0 opacity-0"} overflow-hidden transition-all duration-500`}>
                    <div className=" rounded-b-2xl flex flex-col justify-center items-center">
                    <a href="/sobre" className="text-white text-lg p-2 duration-500 hover:scale-105 border-b border-gray-400">SOBRE NÓS</a>
                    <a href="/contato" className="text-white text-lg p-2 duration-500 hover:scale-105 border-b border-gray-400">CONTATO</a>
                    <a href="/produtos" className="text-white text-lg p-2 duration-500 hover:scale-105 border-b border-gray-400 mb-2">PRODUTOS</a>
                    <a href="/simule" className="text-white text-lg px-8 py-2 mb-2 block bg-gradient-to-r from-amber-300 to-amber-400 p-3 rounded-xl shadow-lg shadow-amber-400/50 duration-500 hover:scale-110"><button>SIMULE JÁ</button></a>
                </div>
                </div>


            </nav>
        </>
    )
}

export default Header;