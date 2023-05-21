import React, { useState } from 'react';
// Pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
//NavBar & Footer
import NavBar from './NavBar';
import Footer from './Footer';

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderCard = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
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
        <div className='pages'>
            <h1 className='custom-card-header font-bold'>{currentPage}</h1>
            <div className='card-content'>
            {renderCard()}
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}