import React from 'react';

const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    <div className="bg-gray-700 custom-nav">
      <nav className="navbar custom-nav">
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
                href="#blog"
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
