import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
