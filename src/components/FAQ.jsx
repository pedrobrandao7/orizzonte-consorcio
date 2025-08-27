import React from 'react'
import { useState } from 'react';

import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const FAQ = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);


    return (
        <div id="faq" className="font-custom-regular text-white font-thin flex flex-col pt-30 lg:items-center px-4">
            <div className="flex flex-col justify-center items-center lg:max-w-auto ">

                {/* TITULO*/}

                <div className="flex flex-row lg:justify-center  mb-6">
                    <h1 className="font-custom-thin text-5xl text-thin ">
                        Dúvidas <span className="font-custom-regular text-bold"> Frequentes</span>
                    </h1>
                </div>

                <div className='flex flex-col gap-5 pb-20'>

                    {/* DUVIDA 1*/}

                    <div className='max-w-[1000px] bg-white text-black text-2xl p-5 rounded-2xl '>
                        <div className='flex justify-between '>
                            <h2>Como funciona a contemplação?</h2>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                            </button>
                        </div>

                        <div className={`${isOpen ? "bg-white text-gray-800 h-fit flex flex-col justify-center opacity-100 px-4 pt-10 gap-2 text-base" : "h-0 opacity-0"} overflow-hidden transition-all duration-500`}>
                            <p>Existem duas principais formas de ser contemplado em um consórcio:</p>
                            <p>Sorteio: Todos os meses, todos os membros do grupo que estão em dia com os pagamentos concorrem ao sorteio.</p>
                            <p>Lance: O participante oferece um valor maior do que a parcela mensal para tentar antecipar a sua contemplação. Quem der o maior lance leva a carta de crédito.</p>
                        </div>
                    </div>

                    {/* DUVIDA 2*/}

                    <div className='max-w-[1000px] bg-white text-black text-2xl p-5 rounded-2xl '>
                        <div className='flex justify-between '>
                            <h2>Qual a diferença entre consórcio e financiamento?</h2>
                            <button onClick={() => setIsOpen2(!isOpen2)}>
                                {isOpen2 ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                            </button>
                        </div>

                        <div className={`${isOpen2 ? "bg-white text-gray-800 h-fit flex flex-col justify-center opacity-100 px-4 pt-10 gap-2 text-base" : "h-0 opacity-0"} overflow-hidden transition-all duration-500`}>
                            <p>A principal diferença é que no consórcio não há juros. Você paga apenas uma taxa de administração.
                                Já no financiamento, você pega o dinheiro emprestado de uma instituição financeira e paga juros sobre o valor.
                                O consórcio é uma forma de poupança forçada, enquanto o financiamento é um empréstimo.</p>
                        </div>
                    </div>

                    {/* DUVIDA 3*/}

                    <div className='max-w-[1000px] bg-white text-black text-2xl p-5 rounded-2xl'>
                        <div className='flex justify-between '>
                            <h2>Posso usar a carta de crédito para comprar qualquer coisa?</h2>
                            <button onClick={() => setIsOpen3(!isOpen3)}>
                                {isOpen3 ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                            </button>
                        </div>

                        <div className={`${isOpen3 ? "bg-white text-gray-800 h-fit flex flex-col justify-center opacity-100 px-4 pt-10 gap-2 text-base" : "h-0 opacity-0"} overflow-hidden transition-all duration-500`}>
                            <p>Não. A carta de crédito só pode ser usada para comprar o tipo de bem ou serviço para o qual o consórcio foi criado (por exemplo, consórcio de carro, de imóvel, de serviços, etc.). O valor da carta também pode ser usado para quitar um financiamento que você já tenha.</p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FAQ