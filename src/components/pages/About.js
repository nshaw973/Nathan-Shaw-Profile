import React from 'react';
import PROFILE_PIC from '../images/profile.jpg';

export default function About() {
  return (
    <div className="container mx-auto p-4 flex flex-wrap">
      <div className="w-1/4 h-1/4 mx-5 shadow rounded-3xl border-2 border-black">
        <img src={PROFILE_PIC} alt="profile" className="rounded-3xl"></img>
      </div>
      <div className="text-2xl w-1/2">
        <p>
          Hello! I'm Nathan Shaw. I'm an aspiring web developer who is currently
          studying at UCI under their Coding Bootcamp Program. In the bootcamp,
          I've been learning HTML, CSS, and JavaScript. Throughout the program,
          I've learned to work with multiple technologies that would help me
          become a full-stack developer.
        </p>
        <p>
          On a more personal level. One of my hobbies involves recording music!
          I used to work for a recording studio a while back, but now I do it
          for fun for bands that I am close friends with. I also enjoy
          collecting whiskies and learning how to create mix drinks. I also
          enjoy the outdoors, and going camping every now and then. Favorite
          places to go are Joshua Tree, Sequoia, Mammoth Mountain, and the
          picture in the background is from King's Canyon!
        </p>
      </div>
    </div>
  );
}
