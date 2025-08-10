import React from 'react'
import './Contact.css'
import { MdEmail, MdLocationOn, MdCall } from "react-icons/md"; // Material Design Icons


const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e2339714-23ce-4915-9df1-5d6ed55867f7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p><MdEmail /></p><p>harshavardhanreddynusum@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <p><MdCall /></p><p>+91 7032546058</p>
                        </div>
                        <div className="contact-detail">
                            <p><MdLocationOn /></p><p>Anantapur, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right' action="">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required />
                    <label htmlFor="">Write Your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button className='contact-submit' type='submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact