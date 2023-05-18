import React, { useState } from 'react';
import MyImage from './images/profile.jpg'

export default function Portfolio() {
    return (
        <section className='portfolio-container'>
            <div id="About">
                <div className="card w-96">
                <figure><img src={MyImage}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hello I'm Nathan Shaw!</h2>
                        <p>Welcome to my portfolio, navigate through the tabs to learn more about me!</p>
                    </div>
                </div>
            </div> 
        </section>
    )
};