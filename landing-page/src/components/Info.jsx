import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const CLASS_NAMES = {
  REVEAL: 'reveal',
  ACTIVE: 'active',
  CHEVRON_ICON: 'chevron-icon',
};

const TEXT_CONTENT = {
  WHO_AM_I: 'Who am I?',
  WHAT_I_DO: 'What do I do?',
  CONTACT_ME: 'How can you contact me?',
  AREAS_OF_INTEREST: 'My areas of interest',
  EXPERIENCE: 'My experience',
};

const Info = () => {
  const [whoAmIActive, setWhoAmIActive] = useState(false);
  const [whatIDoActive, setWhatIDoActive] = useState(false);
  const [contactMeActive, setContactMeActive] = useState(false);
  const [areasOfInterestActive, setAreasOfInterestActive] = useState(false);
  const [experienceActive, setExperienceActive] = useState(false);

  const handleScroll = () => {
    const reveals = document.querySelectorAll(`.${CLASS_NAMES.REVEAL}`);

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = -70;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add(CLASS_NAMES.ACTIVE);
      } else {
        element.classList.remove(CLASS_NAMES.ACTIVE);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='mx-[5vw] 2xl:mx-[15vw] flex flex-col justify-center mt-16 p-5 text-center items-center' id='info'>
      <h2 className='font-semibold text-4xl tracking-tight text-white' aria-label='Frequently asked questions.' role='heading'>
        {`${TEXT_CONTENT.WHO_AM_I} ${TEXT_CONTENT.WHAT_I_DO}`}
      </h2>
      <p className='text-gray-400 leading-tight mt-2 max-w-2xl'>Get to know me</p>

      <div className='mx-[5vw] 2xl:mx-[15vw] p-5 text-center items-center sm:w-[25rem] md:w-[40rem]'>
        <details className={`group ${CLASS_NAMES.REVEAL} ${whoAmIActive ? CLASS_NAMES.ACTIVE : ''}`} onClick={() => setWhoAmIActive(!whoAmIActive)}>
          <summary className='flex items-center justify-between p-4 cursor-pointer border-b border-gray-800 transition-all hover:bg-gray-900/10 hover:border-gray-800/50 duration-300'>
            <span className='leading-tight text-gray-300'>{TEXT_CONTENT.WHO_AM_I}</span>
            <span className={`text-white ${CLASS_NAMES.CHEVRON_ICON} ${whoAmIActive ? CLASS_NAMES.ACTIVE : ''}`}>
              <FiChevronDown />
            </span>
          </summary>
          <div className='p-4 text-gray-500 leading-tight text-left'>I am a 16-year-old developer from Finland, and I'm currently studying web development at a vocational school.</div>
        </details>

        <details className={`group ${CLASS_NAMES.REVEAL} ${whatIDoActive ? CLASS_NAMES.ACTIVE : ''}`} onClick={() => setWhatIDoActive(!whatIDoActive)}>
  <summary className='flex items-center justify-between p-4 cursor-pointer border-b border-gray-800 transition-all hover:bg-gray-900/10 hover:border-gray-800/50 duration-300'>
    <span className='leading-tight text-gray-300'>{TEXT_CONTENT.WHAT_I_DO}</span>
    <span className={`text-white ${CLASS_NAMES.CHEVRON_ICON} ${whatIDoActive ? CLASS_NAMES.ACTIVE : ''}`}>
      <FiChevronDown />
    </span>
  </summary>
  <div className='p-4 text-gray-500 leading-tight text-left'>I develop various projects using technologies like PHP, HTML, CSS, JavaScript, MySQL, and Lua. You can check out my work in the Projects section.</div>
</details>

<details className={`group ${CLASS_NAMES.REVEAL} ${contactMeActive ? CLASS_NAMES.ACTIVE : ''}`} onClick={() => setContactMeActive(!contactMeActive)}>
  <summary className='flex items-center justify-between p-4 cursor-pointer border-b border-gray-800 transition-all hover:bg-gray-900/10 hover:border-gray-800/50 duration-300'>
    <span className='leading-tight text-gray-300'>{TEXT_CONTENT.CONTACT_ME}</span>
    <span className={`text-white ${CLASS_NAMES.CHEVRON_ICON} ${contactMeActive ? CLASS_NAMES.ACTIVE : ''}`}>
      <FiChevronDown />
    </span>
  </summary>
  <div className='p-4 text-gray-500 leading-tight text-left'>I don't really use Discord or Telegram. You can contact me by sending me an email at emppu@emppu.dev. Here is my PGP key.</div>
</details>

<details className={`group ${CLASS_NAMES.REVEAL} ${areasOfInterestActive ? CLASS_NAMES.ACTIVE : ''}`} onClick={() => setAreasOfInterestActive(!areasOfInterestActive)}>
  <summary className='flex items-center justify-between p-4 cursor-pointer border-b border-gray-800 transition-all hover:bg-gray-900/10 hover:border-gray-800/50 duration-300'>
    <span className='leading-tight text-gray-300'>{TEXT_CONTENT.AREAS_OF_INTEREST}</span>
    <span className={`text-white ${CLASS_NAMES.CHEVRON_ICON} ${areasOfInterestActive ? CLASS_NAMES.ACTIVE : ''}`}>
      <FiChevronDown />
    </span>
  </summary>
  <div className='p-4 text-gray-500 leading-tight text-left'>Here are a few of my areas of interest: Cybersecurity, penetration testing, opensource intelligence, web scraping, and fullstack development.</div>
</details>

<details className={`group ${CLASS_NAMES.REVEAL} ${experienceActive ? CLASS_NAMES.ACTIVE : ''}`} onClick={() => setExperienceActive(!experienceActive)}>
  <summary className='flex items-center justify-between p-4 cursor-pointer border-b border-gray-800 transition-all hover:bg-gray-900/10 hover:border-gray-800/50 duration-300'>
    <span className='leading-tight text-gray-300'>{TEXT_CONTENT.EXPERIENCE}</span>
    <span className={`text-white ${CLASS_NAMES.CHEVRON_ICON} ${experienceActive ? CLASS_NAMES.ACTIVE : ''}`}>
      <FiChevronDown />
    </span>
  </summary>
  <div className='p-4 text-gray-500 leading-tight text-left'>I'm fluent in Python and have multiple years of experience with it. I have a basic understanding of HTML, CSS, and PHP.</div>
</details>
      </div>
    </div>
  );
};

export default Info;