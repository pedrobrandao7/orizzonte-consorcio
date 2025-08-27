import React from 'react'
import Carrossel from './Carrossel'

const SectionTipos = () => {


  return (
    <div className="font-custom-regular text-white font-thin mt-30 flex flex-col mx-4 lg:items-center ">
      <div className="flex flex-col justify-center items-center lg:max-w-auto ">

        {/* TITULO*/}

        <div className="flex flex-row lg:justify-center  mb-6">
          <h1 className="font-custom-thin text-5xl text-thin ">
            Tipos de <span className="font-custom-regular text-bold"> Consórcio</span>
          </h1>
        </div>

        {/* PARAGRAFO*/}

        <div className="text-sm flex  text-[--font-custom-regular] mb-20 lg:max-w-250">
          <p>Descubra a liberdade de planejar sua próxima conquista com os tipos de consórcio. 
            Seja para comprar seu carro novo, reformar sua casa ou investir em serviços para sua família,
             o consórcio é a solução ideal para realizar seus sonhos sem pagar juros.</p>
        </div>

        {/* CARROSSEL */}

        <div className="mb-10">
          <Carrossel/>
        </div>
        
      </div>

    </div>

  )
}

export default SectionTipos