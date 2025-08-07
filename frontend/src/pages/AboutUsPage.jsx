import React from 'react';
import missionImage from '../assets/aboutuspage.jpg'; // Replace with your actual image path
import peopleImage from '../assets/bunchofpeople.avif'
import Testimonials from '../component/Testimonials';

const AboutUsPage = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 flex justify-center">
          <img src={peopleImage} alt="Mission" className="w-200 h-80 rounded-[50px] object-cover opacity-60" />
        </div>
        <div className="lg:w-1/2 text-left md:text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission</h2>
          <p className="text-lg text-gray-700">
            Creating financial opportunity that advances America’s collective potential.
          </p>
        </div>
      </div>

      {/* Founding Story */}
      <div className="max-w-3xl mx-auto mt-20 text-center md:text-left lg:text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Founding Story</h2>
        <p className="text-gray-700 text-lg mb-4">
          Dave is the finance version of David vs. Goliath. Three friends were fed up with their banking experience, 
          often incurring $38 overdraft fees and never having insights into how much money was left before payday.
        </p>
        <p className="text-gray-700 text-lg">
          With customer loyalty at big banks at an all-time low, they figured building the next great financial 
          institution, one that truly helps people, was the answer.
        </p>
        <div className="mt-10 flex justify-center">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <img
            src={missionImage}
            alt="Founding"
            className="w-full h-full object-cover"
            />
        </div>
        </div>

      </div>
      <br></br>
      <br></br>
      <hr />
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default AboutUsPage;
