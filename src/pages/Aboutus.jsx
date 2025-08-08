import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://source.unsplash.com/600x400/?debate,youth"
            alt="Youth Parliament Society"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-9 font-bold text-gray-900 sm:text-4xl">
            The Voice of Visionary Youth
          </p>
          <p className="mt-6 text-lg text-gray-700">
            Youth Parliament Society at Graphic Era is a dynamic student-led initiative that nurtures
            leadership, critical thinking, and public speaking skills. We simulate the workings of
            real parliamentary sessions, encouraging youth to debate, deliberate, and develop a deeper
            understanding of democratic values.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Through model sessions, panel discussions, awareness drives, and workshops, we create a
            platform for students to express their ideas on governance, policy-making, and social issues.
            Our aim is to shape informed citizens and future leaders with courage, clarity, and conviction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
