import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Stats />
          <Features />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;