import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </>
    // Testing
  );
}

export default App;
