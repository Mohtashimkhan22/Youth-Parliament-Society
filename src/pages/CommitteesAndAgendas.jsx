import React from 'react';

const committees = [
  {
    name: 'Lok Sabha',
    agenda: 'Discussing the Uniform Civil Code and its implications on Indian society.',
    color: 'bg-yellow-100 text-yellow-800',
  },
  {
    name: 'All India Political Parties Meet (AIPPM)',
    agenda: 'Deliberating on electoral reforms and strengthening democratic institutions.',
    color: 'bg-red-100 text-red-800',
  },
  {
    name: 'National Press',
    agenda: 'Ensuring unbiased reporting and analyzing parliamentary debates and public reactions.',
    color: 'bg-gray-100 text-gray-800',
  },
  {
    name: 'NITI Aayog Simulation',
    agenda: 'Strategizing youth employment and sustainable urban development.',
    color: 'bg-blue-100 text-blue-800',
  },
];

const CommitteesAndAgendas = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Committees & Agendas
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore the Forums of Discussion
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our committees simulate real-world Indian policymaking and journalism,
            providing students a platform to think critically, speak confidently, and shape opinions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className={`text-xl font-semibold mb-2 ${committee.color}`}>
                {committee.name}
              </h3>
              <p className="text-gray-700">{committee.agenda}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteesAndAgendas;
