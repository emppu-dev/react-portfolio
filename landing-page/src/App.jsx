import React, { useEffect } from 'react';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Info from './components/Info';

const App = () => {
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const attachSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = e.target.getAttribute('href').substring(1);
          handleSmoothScroll(targetId);
        });
      });
    };

    const detachSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };

    attachSmoothScroll();

    return () => {
      detachSmoothScroll();
    };
  }, []);

  return (
    <div>
      <Navbar handleSmoothScroll={handleSmoothScroll} />
      <Home />
      <Projects />
      <Info />
    </div>
  );
};

export default App;
