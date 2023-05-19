import React, { useEffect, useState } from 'react';

export default function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">
        Github Profile:
        <a href="https://github.com/nshaw973" target='_blank' className="text-blue-500">
          nshaw973
        </a>
      </h3>
      <h3 className="text-xl mb-2">Here is a list of some of my work:</h3>
      <ul>
        <li>
          <a
            href="https://github.com/nshaw973/The-Marketplace"
            target='_blank'
            className="text-blue-500 font-bold"
          >
            The MarketPlace
          </a>
          <p>
            This was created as a group project alongside four other students
            during the UCI Coding Bootcamp Program.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/nshaw973/Challenge-12-Tech-Blog"
            target='_blank'
            className="text-blue-500 font-bold"
          >
            Tech Blog Model
          </a>
          <p>
            A Tech Blog model created to showcase my MVC skills, using
            express.js, node.js, mysql, and handlebars.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/nshaw973/Challenge-6-Weather-Forecast"
            target='_blank'
            className="text-blue-500 font-bold"
          >
            Weather API Model
          </a>
          <p>
            This Weather API was created to showcase my skills in working with
            APIs, in this case I worked with the OpenWeathermap API, geocoding
            API, and Day.js as well.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/nshaw973/Progressive-Web-App-Text-Editor-Model"
            target='_blank'
            className="text-blue-500 font-bold"
          >
            Progressive Web App Text Editor Model
          </a>
          <p>
            The main focus for this application was to show my understanding of
            PWAs, and creating an intallable application that contains a
            Manifest and a Service Worker.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/nshaw973/Social-Network-API-Model"
            target='_blank'
            className="text-blue-500 font-bold"
          >
            Social Network API Model
          </a>
          <p>
            A showcase of my ability to work with Mongoose as a database, there
            is no front-end for this, so all the data is retrieved and
            manipulated via Insomnia. There is a video in the readme that shows
            how the application works.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/nshaw973/Challenge-11-E-Commerece-Back-End"
            target='_blank'
            className="text-blue-500 font-bold"
          >
            E-Commerce Back-End Model
          </a>
          <p>
            This application involves working with MYSQL, and sequelize to work
            and manipulate data on the backend. The application involves using
            Insomnia, in order to manipulate the data. A video is available in
            the readme to view how the application works.
          </p>
        </li>
      </ul>
    </div>
  );
}
