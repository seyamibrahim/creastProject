
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='w-fit'>
      <Navbar></Navbar>
      

      <Hero></Hero>
      
      <Cards></Cards>
      <Footer></Footer>
      
    </div>
  )
}

export default App
