import React from 'react';
import Projects from '../Pages/Project/Projects';
import pic1 from '../assets/Profilepic.jpg';

const Card = [
  {
    img: pic1,
    projectName: "Hotel Booking",
    description: "A comprehensive hotel booking system."
  },
  {
    img: pic1,
    projectName: "Taxi Guru",
    description: "An efficient taxi booking application."
  },
  {
    img: pic1,
    projectName: "Gautam Association",
    description: "A portal for Gautam Association."
  },
  {
    img: pic1,
    projectName: "My Portfolio",
    description: "A personal portfolio showcasing my work."
  }
];

const ProjectCard = () => {
  return (
    <>
      {Card.map((item, index) => (
        <Projects
          key={index}
          img={item.img}
          projectName={item.projectName}
          description={item.description}
        />
      ))}
    </>
  );
};

export default ProjectCard;
