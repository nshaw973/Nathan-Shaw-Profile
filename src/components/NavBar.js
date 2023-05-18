import React from 'react';

const NavBar = ({ handlePageChange }) => {
  return (
    <div className="bg-gray-700 custom-nav">
      <nav className="navbar custom-nav">
        <div className="flex-none">
          <ul className="menu menu-horizontal flex space-x-4 px-1">
            {/* About */}
            <li>
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className="text-white"
              >
                About Me
              </a>
            </li>
            {/* Blog */}
            <li>
              <a
                href="#blog"
                onClick={() => handlePageChange('Blog')}
                className="text-white"
              >
                Blog
              </a>
            </li>
            {/* Contact */}
            <li>
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className="text-white"
              >
                Contact
              </a>
            </li>
            {/* Resume */}
            <li>
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className="text-white"
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
