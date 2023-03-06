import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';

import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
