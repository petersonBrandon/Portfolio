import React from 'react';
import '../styles/Windows.css';

import Home from './Window_Components/Home';
import About from './Window_Components/About';
import Skills from './Window_Components/Skills';
import Projects from './Window_Components/Projects';
import Contact from './Window_Components/Contact';

const Windows = () => {
    return (
        <div className='windows_container'>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Windows;
