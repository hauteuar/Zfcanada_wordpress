import React, { useState } from 'react';
import './ContactForm.css'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would usually send the form data to your server
        // With Netlify, the form submission is handled automatically when you deploy your site
    };

    return (
        <form name="contact" onSubmit={handleSubmit} data-netlify="true" className="contact-form">
            <h2>Drop Us A Line</h2>
            <p>Immigway Visa Agency will help you to solve your problem</p>

            <label htmlFor="name">Name<span className="required">*</span></label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

            <label htmlFor="email">E-mail<span className="required">*</span></label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

            <label htmlFor="phone">Phone No</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />

            <label htmlFor="message">Text</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>

            <button type="submit">CONTACT US</button>
        </form>
    );
};

export default ContactForm;
