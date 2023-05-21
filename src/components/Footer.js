import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-700 custom-footer'>
      <nav className="footer custom-footer">
        <div className="flex-none">
          <ul className="menu menu-horizontal flex space-x-4 px-1">
            <li><a href="https://github.com/nshaw973" className="text-white">Github</a></li>
            <li><a href="https://www.linkedin.com/" className="text-white">LinkedIn</a></li>
            <li><a href="https://stackoverflow.com/" className="text-white">Stack Overflow</a></li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
