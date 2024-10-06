import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      codeLink: "https://github.com/pandey2029/Research_paper_Recommender_System",
    },
    {
      id: 2,
      src: reactParallax,
      codeLink: "https://github.com/shashankmishra4702/Connectopia",
    },
    {
      id: 3,
      src: navbar,
      codeLink: "https://github.com/shashankmishra4702/Crowd-Funding-Blockchain",
    },
    {
      id: 4,
      src: reactSmooth,
      codeLink: "https://github.com/shashankmishra4702/Barber_Shop_LNM",
    },
    {
      id: 5,
      src: installNode,
      codeLink: "https://github.com/shashankmishra4702/Object-detection-using-YOLOv3",
    },
    {
      id: 6,
      src: reactWeather,
      codeLink: "https://github.com/shashankmishra4702/Portfolio",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Here are several projects showcasing my proficiency in machine learning (ML), MERN stack development, and blockchain technologies, along with their corresponding GitHub repositories</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">          
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
