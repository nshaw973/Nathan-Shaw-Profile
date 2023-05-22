import React from 'react';
import jsPDF from 'jspdf';

export default function Resume() {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(resumeText, 10, 10); // Example content, modify as needed

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
      <button onClick={generatePDF} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Download Resume</button>
      <p>{resumeText}</p>
    </div>
  );
}
