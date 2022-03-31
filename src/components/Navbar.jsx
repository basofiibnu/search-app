import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="pt-8 px-6 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex lg:mb-0 flex-row justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-3xl font-bold text-gray-700 py-1 px-2 rounded dark:text-white tracking-wide">
            Goggle
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-md dark:bg-gray-50 dark:text-gray-700 bg-gray-700 text-white border rounded-full px-4 py-1 hover:shadow-lg"
        >
          {darkTheme ? 'Light 🌕' : 'Dark 🌙'}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
