import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';

function App() {
  useEffect(() => {
    // ScrollReveal
    const sr = ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .services-container, .Projects-box, .contact-form, .skill', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });

    // Typed.js
    const options = {
      strings: ['Web Developer', 'UI/UX Designer', 'Mobile Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed('.multiple-text', options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Experience /> 
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
