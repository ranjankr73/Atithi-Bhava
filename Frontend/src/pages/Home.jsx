import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Demo from '../components/Demo';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Services/>
        <Demo/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home;
