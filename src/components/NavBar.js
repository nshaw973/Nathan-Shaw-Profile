import React from 'react';

// Bringing in the currentPage and HandlePageChange function to allow changing the value of the current page found in MainPage.js
// onClick is the event listener that will change the value of the currentPage
const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    <div className="bg-gray-700 custom-nav">
      <nav className="navbar custom-nav">
      <h1 className='font-bold text-white pl-3'>Nathan Shaw</h1>
        <div className="flex-none">
          <ul className="menu menu-horizontal flex space-x-4 px-1 ">
            {/* About */}
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'custom-active' : 'text-white custom-hover'}
              >
                About Me
              </a>
            </li>
            {/* Blog */}
            <li>
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'custom-active' : 'text-white custom-hover'}
              >
                Portfolio
              </a>
            </li>
            {/* Contact */}
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'custom-active' : 'text-white custom-hover'}
              >
                Contact
              </a>
            </li>
            {/* Resume */}
            <li>
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'custom-active' : 'text-white custom-hover'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
