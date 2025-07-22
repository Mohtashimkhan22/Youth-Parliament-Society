import React from 'react';
import bgImage from '../assets/graphicEra.jpeg';
import logo from '../assets/geu-small-logo.png';

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <main className="px-4 sm:px-6 lg:px-8 z-10 pb-24 sm:pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-md">
            <span className="text-yellow-400">Youth Parliament Society</span>
            <br />
            Graphic Era Group of Institutes
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 font-light">
            Fostering leadership, dialogue, and civic engagement among the youth.
            Empowering students to voice their vision for a better tomorrow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="./register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-600 hover:bg-red-500 rounded-md transition duration-200"
            >
              Join the Movement
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-700 bg-white hover:bg-gray-100 rounded-md transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>

      <a
        href="https://geu.ac.in"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
      >
        <img
          src={logo}
          className="lg:w-36 sm:w-36 md:w-44 mx-10"
          alt="Graphic Era logo"
        />
      </a>
    </div>
  );
};

export default Hero;
