import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Info = () => {
  const faqs = [
    {
      q: "Who am I?",
      a: "I am a 16-year-old developer from Finland, and I'm currently studying web development at a vocational school."
    },
    {
      q: "What do I do?",
      a: "I develop various projects using technologies like PHP, HTML, CSS, JavaScript, MySQL, and Lua. You can check out my work in the Projects section."
    },
    {
      q: "My areas of interest",
      a: "Here are a few of my areas of interest: Cybersecurity, penetration testing, opensource intelligence, web scraping, and fullstack development."
    },
    {
      q: "My experience",
      a: "I'm fluent in Python and have multiple years of experience with it. I have a basic understanding of HTML, CSS, TypeScript, JavaScript, React and Angular."
    }
  ];

  return (
    <div className=' justify-center mt-16 p-5' id="info">
      <div className='flex flex-col items-center text-center'>
        <h2 className='font-semibold text-4xl tracking-tight text-white' aria-label='Frequently asked questions.' role='heading'>
        Who am I? What do I do?
        </h2>
        <p className='text-gray-400 leading-tight mt-2 max-w-2xl'>Get to know me</p>
      </div>
      <div className="grid divide-y divide-gray-500/10 max-w-xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none text-white">
                <span> {faq.q}</span>
                <span className="transition group-open:rotate-180 text-xl">
                  <FiChevronDown />
                </span>
              </summary>
              <p className="text-gray-500 mt-3 group-open:animate-fadeIn">
                {faq.a}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;