import React from 'react'
import './About.css'
import profile from '../../assets/profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>

        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate web developer who loves turning complex problems into simple, elegent solutions.</p>
                    <p>I specialize in building responsive front-end interfaces with HTML, CSS, JavaScript, and React, and I'm experienced with backend development using Node.Js and MongoDB. I love transforming ideas into fully functional web applications.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About