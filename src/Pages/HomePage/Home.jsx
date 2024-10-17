import React, { useState, useEffect } from 'react';
import Profile from '../../assets/Profilepic.jpg';

const Home = ({ myStyle }) => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-5" style={myStyle}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className={`rounded-full p-2 ${myStyle.color === '#fff' ? "bg-slate-100" : "bg-black"}`}>
          <img src={Profile} alt="Profile" className="rounded-full w-44 h-44 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm md:text-lg lg:text-2xl mb-3 animate-fadeInUp">Welcome to my Portfolio</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold animate-fadeInUp mb-5">Hi, There! <span className="animate-wave-animation">👋🏻</span> I’m</p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-black animate-fadeInUp mb-5">Mr Himanshu Mishra</p>
          <div className="relative text-red-500">
            <p className={`text-2xl md:text-3xl lg:text-4xl font-black absolute ${showFirst ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              Front End Developer
            </p>
            <p className={`text-2xl md:text-3xl lg:text-4xl font-black absolute ${showFirst ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
              Back End Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
