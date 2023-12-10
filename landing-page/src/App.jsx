import React, { useEffect } from 'react';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Stack from './components/Stack';

const App = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const attachSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', handleSmoothScroll);
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
      <Navbar />
      <Home />
      <Stack />
    </div>
  );
};

export default App;
