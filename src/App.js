import React from 'react'
import Preloader from '../src/components/Preloader'
import Header from '../src/components/Header'
import Banner from '../src/components/Banner'
import About from '../src/components/About'
import Testimonial from '../src/components/Testimonial'
import Services from '../src/components/Services'
import Portfolio from './components/Portfolio'


const App = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonial/> 
    </div>
  )
}

export default App;

