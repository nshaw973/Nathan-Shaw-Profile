import React from 'react';
import jsPDF from 'jspdf';

export default function Resume() {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(resumeText, 10, 10);

    doc.save(`Nathan Shaw's Resume.pdf`);
  };

  const resumeText = `
  Front End Proficencies:
  React
  Bootstrap
  Tailwind
  Javascript
  CSS
  Web APIS
  
  Back-End Proficencies:
  MySQL
  Sequelize
  NoSQL
  Mongoose
  Insomnia
  NodeJS
  ExpressJS`;

  return (
    <div>
      <button
        onClick={generatePDF}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 m-7"
      >
        Download Resume
      </button>
      <div className='ml-24 font-semibold'>
        <h3>Front-End Proficencies:</h3>
        <ul>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>Web APIs</li>
        </ul>
        <h3>Back-End Proficencies:</h3>
        <ul>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>Mongoose</li>
          <li>Insomnia</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
        </ul>
      </div>
    </div>
  );
}
