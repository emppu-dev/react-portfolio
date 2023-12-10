import React from 'react';
import { FaPhp, FaReact, FaPython, FaGithub } from 'react-icons/fa';

const Stack = () => {
  const iconStyle = { color: '#00df9a' };
  return (
    <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 mx-4 md:mx-[15vw] my-4' id='projects'>
      <div className='flex flex-col justify-center p-5'>
        <h2 className='font-semibold text-4xl tracking-tight' role='heading'>
          <span className='inline-block whitespace-nowrap mr-2 text-white' aria-hidden='true'>Some of my projects</span>
        </h2>
        <p className='text-gray-400 leading-tight mt-2'>Here are some of the projects that I have done in the
          past. Browse through this selection to get a sense of my past work and capabilities.</p>
      </div>
      <div className='card reveal bg-white/[0.5%] backdrop-blur-xl text-left flex flex-col items-start p-14 border border-white/5 rounded-xl'
        style={{ opacity: 1 }}>
        <div className='my-2 w-12 h-12'>
          <FaReact size={40} style={iconStyle} />
        </div>
        <span className='flex flex-row items-center'>
          <a>
            <h3 className='tracking-tight text-xl text-white'>emppu.dev</h3>
          </a>
        </span>
        <p className='mt-2 text-gray-500 tracking-tighter leading-tight'>This is the site that you are currently viewing. It is built with React and TailwindCSS.</p>
      </div>
      <div className='card reveal bg-white/[0.5%] backdrop-blur-xl text-left flex flex-col items-start p-14 border border-white/5 rounded-xl'
        style={{ opacity: 1 }}>
        <div className='my-2 w-12 h-12'>
          <FaPhp size={40} style={iconStyle} />
        </div>
        <span className='flex flex-row items-center'>
          <a>
            <h3 className='tracking-tight text-xl text-white'>damage.lol</h3>
          </a>
        </span>
        <p className='mt-2 text-gray-500 tracking-tighter leading-tight'>Roblox reporter service that allows
          users to take down harmful content. Tech stack: PHP, HTML, CSS, JavaScript, MySQL, Lua.
        </p>
      </div>
      <div className='card reveal bg-white/[0.5%] backdrop-blur-xl text-left flex flex-col items-start p-14 border border-white/5 rounded-xl'
        style={{ opacity: 1 }}>
        <div className='my-2 w-12 h-12'>
          <FaPython size={40} style={iconStyle} />
        </div>
        <span className='flex flex-row items-center'>
          <a>
            <h3 className='tracking-tight text-xl text-white'>HakuHaukka</h3>
          </a>
        </span>
        <p className='mt-2 text-gray-500 tracking-tighter leading-tight'>Opensource intelligence Telegram bot that you can use to search for detailed information about individuals and vehicles in Finland. </p>
      </div>
      <div className='card reveal bg-white/[0.5%] backdrop-blur-xl text-left flex flex-col items-start p-14 border border-white/5 rounded-xl'
        style={{ opacity: 1 }}>
        <div className='my-2 w-12 h-12'>
          <FaPython size={40} style={iconStyle} />
        </div>
        <span className='flex flex-row items-center'>
          <a>
            <h3 className='tracking-tight text-xl text-white'>RDMU</h3>
          </a>
        </span>
        <p className='mt-2 text-gray-500 tracking-tighter leading-tight'>Roblox decal mass  uploader is a open source project where users can mass upload roblox decals.</p>
      </div>
      <div className='card reveal bg-white/[0.5%] backdrop-blur-xl text-left flex flex-col items-start p-14 border border-white/5 rounded-xl'
        style={{ opacity: 1 }}>
        <div className='my-2 w-12 h-12'>
          <FaGithub size={40} style={iconStyle} />
        </div>
        <span className='flex flex-row items-center'>
          <a>
            <h3 className='tracking-tight text-xl text-white'>More projects</h3>
          </a>
        </span>
        <p className='mt-2 text-gray-500 tracking-tighter leading-tight'>More of my projects can be found on my GitHub, <a href='https://github.com/emppu-dev' target='blank'>@emppu-dev</a>.</p>
      </div>
    </div>
  );
};

export default Stack;