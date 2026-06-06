import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Floating Particles Background */}
      <ParticlesBackground />

      {/* Sticky Header / Navigation */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Courses Section */}
        <Courses />

        {/* Why Choose Us Section */}
        <WhyUs />

        {/* Success Statistics Section */}
        <Stats />

        {/* Alumni Testimonials Section */}
        <Testimonials />

        {/* Contact Admissions Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
