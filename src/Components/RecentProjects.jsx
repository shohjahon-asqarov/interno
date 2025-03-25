import React from 'react';
import Recent1 from '../assets/images/Recnt1.svg';
import Recent2 from '../assets/images/Recent2.svg';
import Recent3 from '../assets/images/Recent3.svg';
import Recent4 from '../assets/images/Recent4.svg';
import arrow from '../assets/icons/arrow-right.svg';

const RecentProjects = () => {
  const projects = [
    { id: 1, title: "Winery Dry Creek Building", description: "Art Modern", img: Recent1 },
    { id: 2, title: "Creative Workplace Design", description: "Minimalist", img: Recent2 },
    { id: 3, title: "Bedroom Interior Pot Work", description: "Modern", img: Recent3 },
    { id: 4, title: "Light Ambience Sepia Design", description: "Scandinavian", img: Recent4 }
  ];

  return (
    <section className="container mx-auto px-4 mb-12 py-28 md:px-8">
      <div className="text-center my-12">
        <h1 className="font-serif text-4xl md:text-3xl">Recent Projects</h1>
        <p className="text-gray-600 mt-4">
          With tools to make every part of your process more human and a support team
          <br />
          excited to help you, getting started with us has never been easier.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div key={project.id} className="w-full md:w-[590px]">
            <img className="mb-6.5 w-full" src={project.img} alt={project.title} />
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-normal text-[#292F36] md:text-xl">{project.title}</h2>
                <p className="text-lg text-[#4D5053] Jost">{project.description}</p>
              </div>
              <button className="bg-[#F4F0EC] rounded-full cursor-pointer p-4 md:p-6">
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;