import React from 'react';
import { BrowserRouter} from 'react-router-dom';
// import components
import Header from './Components/Header';
import Hero from './Components/Hero';
import Quote from './Components/Quote';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Header/>
      <Hero />
      <Skills />
      <Portfolio />
      <About />
      <Testimonials />
      <Services />
      <Contact />
      <Quote />
      <Footer />
      <BackToTop />
      <div style={{height: 'auto'}}></div>
      </BrowserRouter>
    </div>
  )
};

export default App;
