import React from "react";
import { Link } from "react-router-dom";

const SectionTitulo = () => {
  return (
    <div className="font-custom-regular text-white font-thin mt-20 flex flex-col mx-4 lg:mx-0 lg:flex-row lg:px-15 lg:justify-around ">
      <div className="flex flex-col lg:max-w-lg">
        {/* TITULO*/}

        <div className="mb-6">
          <h1 className="flex flex-col text-2xl">
            Seu futuro é o:
            <span className="lg:text-8xl text-6xl text-[#FFCE48]">
              Orizzonte
            </span>
          </h1>
        </div>

        {/* PARAGRAFO*/}

        <div className="text-sm text-[--font-custom-regular] mb-5">
          <p>
            A Orizzonte Consórcios oferece mais que a realização de seus planos.
            Nós construímos, com você, o caminho para alcançar seus maiores
            sonhos. Através do consórcio, transformamos a linha do horizonte do
            seu futuro em uma realidade acessível, seja para a aquisição de um
            carro, de uma casa, ou de qualquer outro bem que você deseje.
          </p>
        </div>

        {/* BOTOES */}

        <div className="flex flex-row gap-5">
          <Link
            to="/contato"
            className="text-white text-lg px-8 py-2 mb-2 block p-3 rounded-xl border
                 border-black  hover:bg-blue-800"
          >
            CONTATO
          </Link>
          <Link
            to="/simule"
            className="text-white text-lg px-8 py-2 mb-2 block bg-gradient-to-r
                 from-amber-300 to-amber-400 p-3 rounded-xl shadow-lg
                  shadow-amber-400/50 duration-500 hover:scale-110"
          >
            SIMULE JÁ
          </Link>
        </div>
      </div>
      <div className="">
        <img src="/assets/nivus.png" alt="" className="" />
      </div>
    </div>
  );
};

export default SectionTitulo;
