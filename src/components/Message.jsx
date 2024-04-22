import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaPen, FaListAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Message() {
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
    emailjs.send('service_mc49zuo', 'template_kp3tmuf', formData, '0F2IGzYbKry9o2pkn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
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
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form text-black w-full max-w-lg mx-auto p-5  shadow-lg rounded-lg">
      <div className="form-group mb-4 relative">
        <FaUser className="absolute top-2.5 left-3 text-lg text-gray-400"/>
        <input type="text" name="name" placeholder="Your name*" value={formData.name} onChange={handleChange} required 
          className="pl-10 pr-3 py-2 w-full border rounded-md"/>
      </div>

      <div className="form-group mb-4 relative">
        <FaPhone className="absolute top-2.5 left-3 text-lg text-gray-400"/>
        <input type="tel" name="phone" placeholder="Your phone*" value={formData.phone} onChange={handleChange} required 
          className="pl-10 pr-3 py-2 w-full border rounded-md"/>
      </div>

      <div className="form-group mb-4 relative">
        <FaEnvelope className="absolute top-2.5 left-3 text-lg text-gray-400"/>
        <input type="email" name="email" placeholder="Your email*" value={formData.email} onChange={handleChange} required 
          className="pl-10 pr-3 py-2 w-full border rounded-md"/>
      </div>

      <div className="form-group mb-4 relative">
        <FaListAlt className="absolute top-2.5 left-3 text-lg text-gray-400"/>
        <select name="option" value={formData.option} onChange={handleChange} required
          className="pl-10 pr-3 py-2 w-full border rounded-md appearance-none bg-no-repeat bg-right-2.5 bg-[length:1.5em]">
          <option value="">Choose your option*</option>
          <option value="feedback">Feedback</option>
          <option value="inquiry">Inquiry</option>
          <option value="support">Support</option>
        </select>
      </div>

      <div className="form-group mb-4 relative">
        <FaPen className="absolute top-2.5 left-3 text-lg text-gray-400"/>
        <textarea name="message" placeholder="Your Message*" value={formData.message} onChange={handleChange} required
          className="pl-10 pr-3 py-2 w-full border rounded-md"></textarea>
      </div>

      <button type="submit" className="w-full bg-[#0f1b39] hover:bg-[#0c1630] text-white font-bold py-3 px-4 rounded-md transition-colors">
        SEND MESSAGE
      </button>
    </form>
  );
}

export default Message;
