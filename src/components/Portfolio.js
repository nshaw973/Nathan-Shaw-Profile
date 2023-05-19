import React, { useState } from 'react';
import MyImage from './images/profile.jpg';
// Pages
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
//NavBar & Footer
import NavBar from './NavBar';
import Footer from './Footer';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderCard = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Blog />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='fullpage'>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <section className="portfolio-container">
        <div id="About" className="custom-card-container">
          <div className="card w-80 custom-card">
            <figure>
              <img src={MyImage} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Hello I'm Nathan Shaw!</h2>
              <p>
                Welcome to my portfolio, navigate through the tabs to learn more
                about me!
              </p>
            </div>
          </div>
        </div>
        <div className='pages'>
            <h1 className='bg-gray-700 text-white custom-card-header'>{currentPage}</h1>
            {renderCard()}
        </div>
      </section>
      <Footer />
    </div>
  );
}
