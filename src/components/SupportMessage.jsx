import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaPen, FaListAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function SupportMessage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    option: '',
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

    // Using provided Email.js user ID, service ID, and template ID
    emailjs.send('service_796se2g', 'template_k0f5a3h', formData, '7SXVqAhAFp4OcZpUD')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Success handling: Reset the form, show a success message, etc.
        setFormData({
          name: '',
          phone: '',
          email: '',
          option: '',
          message: '',
        });
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        // Error handling: Show an error message, etc.
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form text-black">
      <div className="form-group">
        <FaUser className='text-black'/>
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <FaPhone className='text-white'/>
        <input
          type="tel"
          name="phone"
          placeholder="Your phone*"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <FaEnvelope className='text-black'/>
        <input
          type="email"
          name="email"
          placeholder="Your email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <FaListAlt className='text-black'/>
        <select
          name="option"
          value={formData.option}
          onChange={handleChange}
          required
        >
          <option value="">Choose your option*</option>
          <option value="feedback">Feedback</option>
          <option value="inquiry">Inquiry</option>
          <option value="support">Support</option>
        </select>
      </div>

      <div className="form-group1">
      
        <textarea
          name="message"
          placeholder="Your Message*"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">SEND MESSAGE</button>
    </form>
  );
}

export default SupportMessage;
