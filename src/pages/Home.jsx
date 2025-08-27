import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import SectionTitulo from '../components/SectionTitulo'
import SectionTipos from '../components/SectionTipos'
import SectionOque from '../components/SectionOque'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'



const Home = () => {

  return <>
  <div className='font-(family-name:Poppins)>'>
   <TopBar />
   <Header/>
   <Whatsapp/>
   <SectionTitulo/>
   <SectionTipos/>
   <SectionOque/>
   <FAQ />
   <Footer/>
   </div>
  </>
  
}

export default Home