import React from 'react'
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import arrayDestruct from "../assets/portfolio/foodie.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/clock.png";
import reactParallax from "../assets/portfolio/Weather.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

export default function Portfolio() {
    const portfolios = [
        {
          id: 1,
          src: arrayDestruct,
          btn1: "Code",
          codeLink: 'https://github.com/withjass19/Foodies.git',
          btn2: "Demo",
          demoLink: 'https://withjass19.github.io/Foodies/',
        },
        {
          id: 2,
          src: reactParallax,
          btn1: "Code",
          codeLink: "https://github.com/withjass19/Weather-App.git",
          btn2: "Demo",
        },
        {
          id: 3,
          src: navbar,
          btn1: "Code",
          codeLink: "https://github.com/withjass19/StopWatch.git",
          btn2: "Demo",
          demoLink: 'https://withjass19.github.io/StopWatch/',
        },
        {
          id: 4,
          src: reactSmooth,
        },
        {
          id: 5,
          src: installNode,
        },
        {
          id: 6,
          src: reactWeather,
        },
      ];
    return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, demoLink, codeLink, btn1, btn2  }) => (
          <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={codeLink} target='_blank' rel="noreferrer">
                  {btn1}
                </a>
              </button>
              <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                <a href={demoLink} target='_blank'  rel="noreferrer">
                  {btn2}
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
