import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({ handleSmoothScroll }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = (targetId) => {
    handleSmoothScroll(targetId);
    setNav(false);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>EMPPU</h1>
      <ul className='hidden md:flex'>
        <a onClick={() => handleLinkClick('home')}><li className='p-4 cursor-pointer'>Home</li></a>
        <a onClick={() => handleLinkClick('projects')}><li className='p-4 cursor-pointer'>Projects</li></a>
        <a onClick={() => handleLinkClick('info')}><li className='p-4 cursor-pointer'>Info</li></a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'z-50 mobile-nav fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>EMPPU</h1>
        <a onClick={() => handleLinkClick('home')}><li className='p-4 cursor-pointer border-b border-gray-900'>Home</li></a>
        <a onClick={() => handleLinkClick('projects')}><li className='p-4 cursor-pointer border-b border-gray-900'>Projects</li></a>
        <a onClick={() => handleLinkClick('info')}><li className='p-4 cursor-pointer border-b border-gray-900'>Info</li></a>
      </ul>
    </div>
  );
};

export default Navbar;
