import React from 'react';

const events = [
  {
    title: 'Youth Parliament 2024',
    date: 'August 10, 2024',
    location: 'Graphic Era University, Dehradun',
    description:
      'A platform for young leaders to debate and shape policy decisions. Join us for spirited discussions and idea exchange.',
  },
  {
    title: 'Mock UN Conference',
    date: 'September 15, 2024',
    location: 'Online via Zoom',
    description:
      'Simulate real UN committees and engage in global diplomacy with participants from across the country.',
  },
  {
    title: 'Public Speaking Workshop',
    date: 'October 5, 2024',
    location: 'Campus Auditorium',
    description:
      'Learn techniques of confident speaking, persuasion, and debating from seasoned professionals.',
  },
];

const Events = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Events</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">What's Happening</p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our upcoming and recent events that empower young voices and shape leaders of tomorrow.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                📅 {event.date}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                📍 {event.location}
              </p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
