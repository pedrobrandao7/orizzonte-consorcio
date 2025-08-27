import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Importe os módulos necessários
import { Pagination, Autoplay } from 'swiper/modules';

// Nota: Confirme se os caminhos dos arquivos estão corretos
import Casa from '/assets/backCasa.png';
import Servico from '/assets/backServico.jpg';
import Veiculo from '/assets/backCarro.png';

const CardDados = [
    {
        title: "Veiculos",
        content: "Consórcio voltado para veiculos como carros, motos e até mesmo caminhões",
        backgroundIcon: Veiculo
    },
    {
        title: "Casa",
        content: "Consórcio voltado casas",
        backgroundIcon: Casa
    },
    {

        title: "Serviços",
        content: "Consórcio voltado para Serviços",
        backgroundIcon: Servico
    }
];

const Carrossel = () => {
    return (
        <div className="flex justify-center items-center ">
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
                pagination={{ clickable: true }}
                className="w-full max-w-[400px] lg:max-w-[1200px] h-[500px] rounded-2xl "
            >
                {CardDados.map((item, index) => (
                    <SwiperSlide key={item.title} className="h-full ">
                        {/* Contêiner do card com 'relative' e 'h-full' para ocupar a altura do slide */}
                        <div
                            className="relative text-white rounded-xl h-full w-full"
                        >
                            {/* Camada 1: Imagem de fundo. 'absolute inset-0' garante que ela cubra todo o pai */}
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-xl"
                                style={{ backgroundImage: `url(${item.backgroundIcon})` }}
                            ></div>

                            {/* Camada 2: Overlay semi-transparente. Também 'absolute inset-0' para cobrir tudo */}
                            <div className="absolute inset-0 bg-gray-900/70 rounded-xl"></div>

                            {/* Camada 3: Conteúdo do card. 'z-10' para ficar por cima e padding para o conteúdo. */}
                            <div className="relative flex flex-col p-6 h-full justify-end items-center">
                                <div className="flex flex-col gap-2 ">
                                    <h3 className="text-4xl font-bold text-white">{item.title}</h3>
                                    <p className="text-sm">{item.content}</p>
                                    <button><a href="" className="text-white max-w-50 text-lg px-8 py-2 mb-2 block bg-gradient-to-r
                                                                from-amber-300 to-amber-400 p-3 rounded-xl shadow-lg
                                                                 shadow-amber-400/50 duration-500 hover:scale-110 ">SAIBA MAIS</a></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carrossel;
