import React from 'react'
import { IoMdPin } from "react-icons/io";

const Quem = () => {
    return (
        <div>
            <div className="font-custom-regular text-white font-thin mt-30 flex flex-col lg:flex-row justify-center items-center lg:px-30 gap-20">
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-center gap-2'>
                        <h2 className='flex items-start font-custom-thin text-5xl text-thin gap-4'>Quem <span className='font-custom-regular text-bold'>somos?</span></h2>
                    </div>
                    <div>
                        <p className='text-lg flex  text-[--font-custom-regular] mb-20 lg:max-w-250 text-center '> Somos a Orizzonte Consórcio, uma empresa com mais de 10 anos de mercado,
                            formada por uma equipe de profissionais com ampla experiência. Atuamos com as melhores administradoras do Brasil, sob a regulamentação do Banco Central,
                            garantindo a segurança e a credibilidade do nosso trabalho.
                        </p>
                    </div>
                </div>
                <div className='h-100 w-100 rounded-2xl'>
                    <img src="/assets/chave.png" className="h-auto w-auto rounded-full shadow-2xl shadow-black " />
                </div>

            </div>

            <div className="font-custom-regular text-zinc-600 font-thin mt-30 flex flex-col justify-center items-center lg:px-30 gap-20 py-10">
                <div className='flex flex-col gap-10 bg-white shadow-2xl shadow-black p-5 rounded-2xl pb-20 '>
                    <div className='flex justify-center gap-2'>
                        <h2 className='flex flex-col lg:flex-row justify-center items-center font-custom-thin text-5xl text-thin gap-4'><IoMdPin className='text-red-400' />Onde <span className='font-custom-regular text-bold'>estamos?</span></h2>
                    </div>
                    <div>
                        <p className='text-lg flex  text-[--font-custom-regular] mb-5 lg:max-w-250 '> Nossa sede está localizada em Sete Lagoas, Minas Gerais, mas nossa atuação
                            se estende por todo o Brasil. Acreditamos que a distância não pode ser um obstáculo para a realização de sonhos, por isso oferecemos um atendimento completo e eficiente
                            a clientes em qualquer estado.
                        </p>
                    </div>

                    <div className='flex justify-center '>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71399.59054650762!2d-44.2814356960523!3d-19.45564031652224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa65aa48d5ab029%3A0x3158b7984cbbf15f!2sSete%20Lagoas%2C%20MG!5e1!3m2!1spt-BR!2sbr!4v1756152890488!5m2!1spt-BR!2sbr"
                            title="Google Maps Location"
                            width="70%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='rounded-2xl shadow-2xl '
                        ></iframe>
                    </div>
                </div>


            </div>

            <div className="bg-[#014EA8] font-custom-regular text-white font-thin mt-30 flex flex-col lg:flex-row justify-center items-center lg:px-30 py-40 gap-20">
                <div className='flex flex-col gap-10 px-5'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='flex flex-col justify-center items-center font-custom-thin text-5xl text-thin gap-4'>Por que escolher o<span className='font-custom-regular text-bold'>Orizzonte?</span></h2>
                    </div>
                    <div>
                        <p className='text-1xl flex  text-[--font-custom-regular] mb-20 lg:max-w-250 px-4 '> Somos a Orizzonte Consórcio, uma empresa com mais de 10 anos de mercado,
                            formada por uma equipe de profissionais com ampla experiência. Atuamos com as melhores administradoras do Brasil, sob a regulamentação do Banco Central,
                            garantindo a segurança e a credibilidade do nosso trabalho.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                        <button><a href="/contato" className="text-white text-lg px-8 py-2 mb-2 block p-3 rounded-xl border
                 border-black  hover:bg-blue-800">CONTATO</a></button>
                        <button><a href="/simule" className="text-white text-lg px-8 py-2 mb-2 block bg-gradient-to-r
                 from-amber-300 to-amber-400 p-3 rounded-xl shadow-lg
                  shadow-amber-400/50 duration-500 hover:scale-110">SIMULE E VEJA</a></button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Quem