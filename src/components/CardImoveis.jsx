import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

import Casa from '/assets/imovel.png';


const CardDados = [
    {
        title: "Casa",
        content: "Parcelas a partir de ",
        price: "R$ 1.967,36",
        credit: "Crédito: R$ 290.000,00",
        backgroundIcon: Casa
    }
];

const mensagem = encodeURIComponent("Olá, tudo bem? Tenho interesse em obter informações sobre os consórcios que vocês oferecem. Poderiam, por favor, me fornecer mais detalhes sobre valores, prazos e condições?");
const linkWpp = `https://wa.me/5531998443042?text=${mensagem}`;

const CardImoveis = () => {
    return (
        <div className="flex flex-col justify-center overflow-hidden mb-20">
                <Swiper

                    // Adicione os módulos aqui
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1} // <-- Mostra sempre 1 card
                    className="w-[350px] md:w-[450px] lg:w-[500px] max-w-[600px] lg:max-w-[1200px] h-[500px]"
                >


                    {CardDados.map((item, index) => (
                        
                        <SwiperSlide key={item.title} className="h-full">

                            {/* Contêiner do card com 'relative' e 'h-full' para ocupar a altura do slide */}
                            <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl h-full w-[350px] md:w-[450px] lg:w-[500px]  overflow-hidden">

                                {/*IMAGEM */}

                                <div >

                                    <img
                                        className="rounded-t-lg w-full h-48 object-cover"
                                        src={item.backgroundIcon}
                                        alt=""
                                    />

                                </div>

                                {/*TITULO/TEXTO/PREÇO */}


                                <div className='flex flex-col justify-center px-10'>

                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 ">
                                        {item.title}
                                    </h5>

                                    <div className="flex flex-col ">
                                        <p className="mb-3 text-xl text-gray-700 ">
                                            {item.content}
                                        </p>

                                        <p className="mb-3 text-4xl text-bold text-gray-700 ">
                                            {item.price}
                                        </p>

                                        <p className="mb-3 text-base italic text-gray-700 ">
                                            {item.credit}
                                        </p>


                                    </div>

                                </div>

                                {/*BOTÃO */}

                                <div className='flex items-end justify-center p-5'>

                                    <a href={linkWpp}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="flex justify-center max-w-34 px-3 py-2 text-sm font-medium text-center
                                     text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                        Tenho interesse!
                                    </a>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
        </div >

    );
};

export default CardImoveis;
