import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/Contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => alert("Message sent!"));
    setFormData({ name: "", email: "", message: "" });

  };


  return (
    <div>
      <h2>Contact Us</h2>
      <div className="main-contacts">
      <div className="reach-us">
        <h3>Reach Us</h3>
        
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /> <br/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /> <br/>
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required /> <br/>
        <button type="submit">Send</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;