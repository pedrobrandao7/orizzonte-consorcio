import React from 'react'
import CardVeiculos from './CardVeiculos'
import CardServicos from './CardServicos'
import CardImoveis from './CardImoveis'

const SectionProdutos = () => {
    return (
        <>
            <div className='flex justify-center items-center text-white  my-30 '>
                <div className="flex flex-row lg:justify-center ">
                    <h1 className="font-custom-thin text-4xl lg:text-5xl text-thin ">
                        Nossos <span className="font-custom-regular text-4xl lg:text-5xl text-bold "> Produtos</span>
                    </h1>
                </div>
            </div>

            <div className='flex flex-col items-center gap-10'>
                <div className='flex items-start px-4'>
                    <h2 className='text-3xl lg:text-6xl px-5 text-white'>Veículos</h2>
                </div>
                <CardVeiculos />
            </div>

            <div className='flex flex-col items-center gap-10'>
                <div className='flex items-start px-4'>
                    <h2 className='text-3xl lg:text-6xl px-5 text-white'>Serviços</h2>
                </div>
                <CardServicos />
            </div>

            <div className='flex flex-col items-center gap-10'>
                <div className='flex items-start px-4'>
                    <h2 className='text-3xl lg:text-6xl px-5 text-white'>Imóvel</h2>
                </div>
                <CardImoveis />
            </div>

        </>
    )
}

export default SectionProdutos
