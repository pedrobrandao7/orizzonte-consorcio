import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import CardVeiculo from '../components/CardVeiculos'
import CardImoveis from '../components/CardImoveis'
import CardServicos from '../components/CardServicos'
import SectionProdutos from '../components/SectionProdutos'

import Footer from '../components/Footer'


const Produtos = () => {
  return (
    <>
      <TopBar />
      <Header />
      <SectionProdutos />
      <Footer />
    </>
  )
}

export default Produtos