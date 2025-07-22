import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-700 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left mb-12">
          <div>
            <h2 className="text-2xl font-bold">Youth Parliament Society</h2>
            <p className="mt-2 max-w-sm text-sm">
              Graphic Era Group of Institutes
              <br />
              Fostering leadership, dialogue, and civic awareness among India’s youth.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-0">
            <a
              href="#register"
              className="inline-block px-6 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition"
            >
              Become a Delegate
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#mission" className="hover:underline">Mission</a></li>
              <li><a href="#vision" className="hover:underline">Vision</a></li>
              <li><a href="#objectives" className="hover:underline">Objectives</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Events</h3>
            <ul className="space-y-2">
              <li><a href="#committees" className="hover:underline">Committees</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#schedule" className="hover:underline">Event Schedule</a></li>
              <li><a href="#highlights" className="hover:underline">Highlights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Get Involved</h3>
            <ul className="space-y-2">
              <li><a href="#register" className="hover:underline">Register</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#team" className="hover:underline">Meet the Team</a></li>
              <li><a href="#faq" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:yps@geu.ac.in" className="hover:underline">yps@geu.ac.in</a></li>
              <li>Phone: <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a></li>
              <li><a href="https://geu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:underline">geu.ac.in</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-300 my-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Youth Parliament Society, Graphic Era Group. All rights reserved.</p>
          <div className="flex mt-4 sm:mt-0 space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
