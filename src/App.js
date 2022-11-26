import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Appetizers from './components/Appetizers';
import SignatureMenu from './components/SignatureMenu';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Appetizers />
      <SignatureMenu />
      <Footer />
    </>
    // Testing
  );
}

export default App;
