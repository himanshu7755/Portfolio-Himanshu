import React, { useState } from 'react';
import About from './About';
import Skills from './Skills';
import Journey from './Journey';
import Ranking from './Ranking';
import SocialMedia from './SocialMedia';

const AboutNav = ({ myStyle }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const sections = [
    { id: 1, name: 'About Me', component: <About myStyle={myStyle} /> },
    { id: 2, name: 'Skills', component: <Skills myStyle={myStyle} /> },
    { id: 3, name: 'Journey', component: <Journey myStyle={myStyle} /> },
    { id: 4, name: 'Ranking', component: <Ranking myStyle={myStyle} /> },
    { id: 5, name: 'Social Media', component: <SocialMedia myStyle={myStyle} /> },
  ];

  const currentSection = sections.find(section => section.id === currentIndex);

  return (
    <div className="fade-in py-5 bg" style={myStyle}>
      <div className='sticky top-40 left-0 right-0 shadow-md z-10'>
        {/* <div className="text-2xl md:text-[2.3rem] xl:text-5xl leading-snug font-black pl-5 py-3 md:pl-16 md:py-5 lg:pl-36 lg:py-7">
          {currentSection?.name}
        </div> */}
        <ul className="b my-5 flex flex-wrap justify-center items-center space-x-2 md:space-x-4">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`flex-1 rounded-t-xl md:flex-none ${currentIndex === section.id ? 'bg-cyan-300' : 'border-indigo-700'}`}
              onClick={() => setCurrentIndex(section.id)}
            >
              <p className="py-2 px-4 md:px-8 lg:px-10 border-2 rounded-t-xl cursor-pointer text-center">
                {section.name}
              </p>
            </button>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        {currentSection?.component}
      </div>

      <div className="hidden md:block">
        {currentSection?.component}
      </div>
    </div>
  );
};

export default AboutNav;
