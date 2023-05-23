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
  // Defaults the page on refresh and opening to About
  const [currentPage, setCurrentPage] = useState('About');
  // Handles the page changes based on the button clicked on the navbar
  const renderCard = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return null;
    }
  };
  // gets sent to the navbar via props, and from there the navbar handles the value for currentpage.
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