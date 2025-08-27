import React from 'react'


const SectionOque = () => {


  return (
    <div className="font-custom-regular text-white font-thin mt-30 flex flex-col pt-30 lg:items-center bg-[#014EA8] px-4">
      <div className="flex flex-col justify-center items-center lg:max-w-auto ">

        {/* TITULO*/}

        <div className="flex flex-row lg:justify-center  mb-6">
          <h1 className="font-custom-thin text-5xl text-thin ">
            Como funciona o <span className="font-custom-regular text-bold"> Consórcio?</span>
          </h1>
        </div>

        {/* PARAGRAFO 1 E IMAGEM 1*/}

        <div className="text-sm flex flex-col justify-center items-center lg:flex-row  text-[--font-custom-regular] mb-20 lg:max-w-250 gap-30 ">
          <div className='max-w-[500px] text-xl'>
            <p>O consórcio é uma forma de compra planejada para adquirir bens como carro ou casa sem juros. 
              Nele, você se une a um grupo de pessoas com o mesmo objetivo e contribui com parcelas mensais. </p>
          </div>

          <div className='h-70 w-70 hover:scale-110 hover:duration-300'>

            <img src="/assets/cofrinho.png" alt="" className='h-auto w-auto'/>
          
          </div>

        </div>

        {/* IMAGEM 2 E PARAGRAFO 2*/}

        <div className="text-sm flex flex-col justify-center items-center lg:flex-row-reverse text-[--font-custom-regular] mb-20 lg:max-w-250 gap-30">
          <div >
            <p className='max-w-[500px] text-xl' >A cada mês, o dinheiro do grupo é usado para contemplar um ou mais membros por meio de sorteio ou lance, 
              dando a eles o direito de usar a carta de crédito para fazer a compra. O processo se repete até que todos 
              no grupo tenham realizado seus sonhos.</p>
          </div>

          <div className='h-60 w-60  hover:scale-110 hover:duration-300'>
            <img src="/assets/grupo.png" alt="h-auto w-auto" />
          </div>

        </div>


      </div>

    </div>

  )
}

export default SectionOque