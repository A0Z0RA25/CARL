import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './CARL/App.css';
import Hero from './CARL/heroContainer/hero';
import Navbar from './CARL/navcontainer/navbar';
import Projects from './CARL/projectContainer/projects';
import About from './CARL/aboutContainer/about';
import Skills from './CARL/skillContainer/skills';
import Contact from './CARL/contactContainer/contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser);

function App() {
  const [showSection, setShowSection] = useState('home');

  function handleClickSection(section) {
    setShowSection(section);
  }

  return (
    <Router>
      <div className='container bg-background md:h-full xl:h-svh w-svw h-svh md:px-[60px] px-[10px] py-[20px] md:py-0'> 
        <Navbar onClickNav={handleClickSection} />
        {showSection === "home" && <Hero />}
        {showSection === "projects" && <Projects />}
        {showSection === "about" && <About />}
        {showSection === "skills" && <Skills />}
        {showSection === "contact" && <Contact />}
      </div>
    </Router>
  );
}

export default App; 
