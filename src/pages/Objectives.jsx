import React from 'react';

const objectives = [
  {
    title: 'Simulate Parliamentary Democracy',
    description:
      'Introduce students to the structure and processes of Indian parliamentary systems through well-organized mock sessions.',
  },
  {
    title: 'Encourage Public Discourse',
    description:
      'Foster a safe space for open dialogue on pressing national and global issues, encouraging respectful and informed discussions.',
  },
  {
    title: 'Cultivate Future Leaders',
    description:
      'Develop oratory, leadership, and decision-making skills by placing students in roles of responsibility and influence.',
  },
  {
    title: 'Raise Political and Social Awareness',
    description:
      'Promote understanding of political systems, rights, and duties among youth to inspire active civic participation.',
  },
];

const Objectives = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Objectives</h2>
        <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Our Core Goals</p>
        <p className="mt-4 text-lg text-gray-600">
          As a student-driven body, the Youth Parliament Society of Graphic Era is committed to
          creating a culture of thoughtful leadership, civic understanding, and impactful expression.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {objectives.map((obj, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-red-700 mb-2">{obj.title}</h3>
            <p className="text-gray-700 text-sm">{obj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
