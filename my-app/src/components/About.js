import React from 'react';
import Headshot from '../assets/Headshots/HeadShot-Color.jpg'

function About() {

    return (
        <section className="about-section">
            <h1 className="section-headers">About</h1>
            <p className="about-p-tags" >HI, IM BLAKE. I AM A WEB DEVELOPER WHO IS DEDICATED TO APPLYING THE SKILLS IVE LEARNED TO CREATE DATA DRIVEN, BEAUTIFUL AND RESPOSIVE WEBSITES.</p>
            <div className="headshot-div"><img className="headshot-img" src={Headshot} alt="headshot"></img></div>
            
        </section>
    )
}

export default About;