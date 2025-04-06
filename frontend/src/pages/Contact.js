import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We'd love to hear from you! Whether it's feedback, a question, or just a hello — drop us a message.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Type your message here..." required />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
