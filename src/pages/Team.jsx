import React from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import Header from './Header';
      

const teamMembers = [
  {
    name: 'Shubhraj choudhary ',
    role: 'Founder & chief advisor',
    image: image1,
  },
  {
    name: 'Mohd. Arshil',
    role: 'Co-founder and president',
    image: image2,
  },
  {
    name: 'Dhruv chauhan',
    role: 'Convenor',
    image: image3,
  },
  {
    name: 'Vishal kansal',
    role: 'Vice president',
    image: image4,
  },
  {
    name: 'Aryan kansal',
    role: 'Secretary general',
    image: image5,
  },
  {
    name: 'Bhumika joshi',
    role: 'Joint secretary',
    image: image6,
  },
  {
    name: 'agrimpal rawat',
    role: 'Deputy secretary general',
    image: image7,
  },
  {
    name: 'Radhika pundir',
    role: 'Under secretary general',
    image: image8,
  },
  {
    name: 'Niti sharma',
    role: 'Under secretary general',
    image: image9,
  },
  {
    name: 'Bhumi bangwal',
    role: 'Under secretary general',
    image: image10,
  },
  {
    name: 'Tanisha neema',
    role: 'Under secretary general',
    image: image11,
  },
  {
    name: 'Harshdeep Bhatia',
    role: 'Under secretary general',
    image: image12,
  },
];

const Team = () => {
  return (
    <>
    <Header/>
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-indigo-600 font-semibold uppercase tracking-wide text-sm">Our Team</h2>
        <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Meet the Core Members</p>
        <p className="mt-4 text-gray-600">
          Passionate individuals dedicated to youth empowerment and impactful dialogue.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
          >
            <img
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-indigo-500"
              src={member.image}
              alt={member.name}
            />
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Team;
