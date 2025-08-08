import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Aboutus', href: '/aboutus' },
  { name: 'Contact', href: '/contact' },
  { name: 'Team', href: '/team' }
];

const Header = ({ brand = 'YPS-GEU', buttonText = 'Register' }) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/register');
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        {/* Brand */}
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">{brand}</span>
        </Link>

        {/* Navigation Links */}
        <nav aria-label="Main navigation" className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="mr-5 hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Register Button */}
        <button
          type="button"
          onClick={onButtonClick}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          {buttonText}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
