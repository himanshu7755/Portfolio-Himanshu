import React from 'react';
import Resume1 from '../../assets/Resume1.jpg'
import Resume2 from '../../assets/Resume2.jpg'

const Resume = ({myStyle}) => {
    return (
        <div className="py-8" style={myStyle}>
            <div className="border-b-2 text-2xl md:text-[2.3rem] xl:text-5xl leading-snug font-black pl-10 py-5 md:pl-16 md:py-14 lg:pl-36">
              Resume
            </div>
            <div className="bg-teal-500 border-2 text-2xl  font-black text-center my-8 mx-96 py-3">
                Download Resume
            </div>
            <div className='flex justify-center items-center'>
                <img className="w-[50%]" src={Resume1} alt="" />
            </div>
            <div className='flex justify-center'>
                <img className='w-[50%]' src={Resume2} alt="" />
            </div>
        </div>
    );
};

export default Resume

