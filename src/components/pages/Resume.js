import React from 'react';
// pdf library to allow downloading resume as pdf
import jsPDF from 'jspdf';
//Resume Text
import { resumeText } from './resume/resumeText';

export default function Resume() {
  // Generates PDF based on the resumeText that is being imported
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(resumeText, 10, 10);
    doc.save(`Nathan Shaw's Resume.pdf`);
  };

  return (
    <div>
      <button
        onClick={generatePDF}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 m-7"
      >
        Download Resume
      </button>
      <div className="ml-24 font-semibold">
        <h3>Front-End Proficiencies:</h3>
        <ul>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>Web APIs</li>
        </ul>
        <h3>Back-End Proficiencies:</h3>
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
