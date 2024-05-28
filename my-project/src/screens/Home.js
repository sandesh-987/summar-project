import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'
import Navbar2 from '../components/Navbar2'



const Home = () => {
  return (
    <div>
        <div><Navbar/></div>
         <Carousel/>
         <Navbar2/>
        <div className='m-3'> 
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
        <div> <Footer/></div>
    </div>
  )
}

export default Home