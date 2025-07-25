import React from 'react';

const teamMembers = [
  {
    name: 'Aarav Sharma',
    role: 'President',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Isha Verma',
    role: 'Vice President',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rohan Mehta',
    role: 'General Secretary',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Simran Kaur',
    role: 'Public Relations Head',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Team = () => {
  return (
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
  );
};

export default Team;
