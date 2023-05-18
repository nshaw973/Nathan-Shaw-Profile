import React from 'react';

const NavBar = () => {
  return (
    <div className='bg-gray-700 custom-nav'>
      <nav className="navbar custom-nav">
        <div className="flex-none">
          <ul className="menu menu-horizontal flex space-x-4 px-1">
            <li><a href="#" className="text-white">About Me</a></li>
            <li><a href="#" className="text-white">Portfolio</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
            <li><a href="#" className="text-white">Resume</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
