import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

import Moto from '/assets/moto.jpg';
import Caminhao from '/assets/caminhao.jpg';
import Carro from '/assets/carro.png';

const CardDados = [
    {
        title: "Carro",
        content: "Parcelas a partir de ",
        price: "R$ 951,23",
        credit: "Crédito: R$ 70.000,00",
        backgroundIcon: Carro
    },
    {
        title: "Moto",
        content: "Parcelas a partir de ",
        price: "R$ 360,11",
        credit: "Crédito: R$ 26.500,00",
        backgroundIcon: Moto
    },
    {
        title: "Caminhão",
        content: "Parcelas a partir de ",
        price: "R$ 1.784,48",
        credit: "Crédito: R$ 150.000,00",
        backgroundIcon: Caminhao
    }
];

const mensagem = encodeURIComponent("Olá, tudo bem? Tenho interesse em obter informações sobre os consórcios que vocês oferecem. Poderiam, por favor, me fornecer mais detalhes sobre valores, prazos e condições?");
const linkWpp = `https://wa.me/5531998443042?text=${mensagem}`;

const CardVeiculos = () => {
    return (
        <div className="flex flex-col justify-center items-center overflow-hidden mb-20">                

                <Swiper
                    breakpoints={{
                        // Em telas menores (móvel), mostre 1 slide completo e uma margem lateral
                        340: {
                            slidesPerView: 1.15,
                            spaceBetween: 15,
                            slidesOffsetBefore: 20, // Adiciona espaçamento na frente
                            slidesOffsetAfter: 20, // Adiciona espaçamento no final
                        },
                        // Em tablets (768px)
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 0,
                        },
                        // Em desktops
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 0,
                        },
                    }}
                    // Adicione os módulos aqui
                    modules={[Pagination, Autoplay]}
                    // Opcional: adicione um atraso para o carrossel passar automaticamente
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full max-w-[400px] lg:max-w-[1200px] h-[500px]  "
                >


                    {CardDados.map((item, index) => (
                        <SwiperSlide key={item.title} className="h-full">

                            {/* Contêiner do card com 'relative' e 'h-full' para ocupar a altura do slide */}
                            <div className="flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-xl h-full w-full overflow-hidden">

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

export default CardVeiculos;
