import React, { useState } from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    const [showResume, setShowResume] = useState(false);

    return (
        <div id='home' className='hero'>
            <img src={profile} alt="Profile" />
            <h1>
                <span>I'm Harshavardhan Reddy</span>, Web developer based in India
            </h1>
            <p>
                Passionate about creating intuitive, responsive, and visually appealing web experiences using the latest technologies.
            </p>

            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with Me
                    </AnchorLink>
                </div>
                <div 
                    className="hero-resume"
                    onClick={() => setShowResume(true)}
                >
                    My Resume
                </div>
            </div>

            {showResume && (
                <div className="resume-modal">
                    <div className="resume-modal-content">
                        <span className="close" onClick={() => setShowResume(false)}>
                            &times;
                        </span>
                        <iframe
                            src="/HarshavardhanReddy_resume.pdf"
                            title="Resume"
                            width="100%"
                            height="500px"
                        ></iframe>
                        <a 
                            href="/HarshavardhanReddy_resume.pdf" 
                            download="Harshavardhan_Reddy_Resume.pdf" 
                            className="download-btn"
                        >
                            ⬇ Download Resume
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
