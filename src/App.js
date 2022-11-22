import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Footer />
    </>
    // Testing
  );
}

export default App;
