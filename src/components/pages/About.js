import React from 'react';
import PROFILE_PIC from '../images/profile.jpg'

export default function About() {
  return (
    <div className="container mx-auto p-4 flex flex-wrap">
      <div className='w-1/4 h-1/4 mx-5 shadow rounded-3xl border-2 border-black'>
        <img src={PROFILE_PIC} className='rounded-3xl'></img>
      </div>
      <p className="text-lg w-1/2">
        Hello! I'm Nathan Shaw. I'm an aspiring web developer who is currently studying at UCI under their Coding Bootcamp Program.
        In the bootcamp, I've been learning HTML, CSS, and JavaScript. Throughout the program, I've learned to work with multiple technologies that would help me become a full-stack developer. Those technologies being:
        <ul className="list-disc ml-8">
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>React</li>
          <li>and more...</li>
        </ul>
      </p>
    </div>
  );
}
