import React from "react";

function Projects({ myStyle, img, projectName, description }) {
  return (
    <div className="py-5 h-screen" style={myStyle}>
      <div className="border-b-2 text-2xl md:text-[2.3rem] xl:text-5xl leading-snug font-black pl-10 py-5 md:pl-16 md:py-14 lg:pl-36">
        Projects
      </div>
      <div className="px-12 md:px-14 lg:px-24 md:mx-16 my-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-14">
          <div className="border-2 border-slate-400 rounded-l-3xl rounded-r-3xl">
            <img className='' src={img} alt="photo" />
            <div className="bg-white px-3 lg:px-6 py-4 rounded-l-3xl rounded-r-3xl">
              <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                {projectName}
              </h1>
              <p className="text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
