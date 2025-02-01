import React, { useState } from "react";
import "./Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/Contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => alert("Message sent to Admin!"));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="promo-section">
      <h2 className="title">📩 Get in Touch</h2>
      <p className="subtitle">We'd love to hear from you! Fill in the form below.</p>
        <h1>Drive Luxury, Live Prestige</h1>
        <p>
          Experience the thrill of top-tier performance and elegance.  
          Find your dream car today. Let’s make luxury a reality.
        </p>
        <div className="contact-info">
        <p>📞 0726205091</p>
        <p>📧 toyota@company.com</p>
        <p> moringa road Street, Nairobi</p>
        </div>
      </div>

      <div className="form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
