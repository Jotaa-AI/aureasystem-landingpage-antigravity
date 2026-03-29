import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import Results from './components/Results';
import Features from './components/Features';
import Bonuses from './components/Bonuses';
import Guarantee from './components/Guarantee';
import Pricing from './components/Pricing';
import Urgency from './components/Urgency';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header openModal={() => setIsModalOpen(true)} />
      <Hero openModal={() => setIsModalOpen(true)} />
      <Credibility />
      <Problem />
      <Mechanism />
      <Results />
      <Features />
      <Bonuses />
      <Guarantee />
      <Pricing openModal={() => setIsModalOpen(true)} />
      <Urgency />
      <FAQ />
      <CTA openModal={() => setIsModalOpen(true)} />
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
