import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaPen, FaListAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function SupportMessage1() {
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
    <form onSubmit={handleSubmit} className="bg contact-form text-black">
      { /* Input for Name */}
      <div className="form-group">
        <div className="input-icon">
          <FaUser className='icon'/>
          <input type="text" name="name" placeholder="Your name*" value={formData.name} onChange={handleChange} required />
        </div>
      </div>

      { /* Input for Phone */}
      <div className="form-group">
        <div className="input-icon">
          <FaPhone className='icon'/>
          <input type="tel" name="phone" placeholder="Your phone*" value={formData.phone} onChange={handleChange} required />
        </div>
      </div>

      { /* Input for Email */}
      <div className="form-group">
        <div className="input-icon">
          <FaEnvelope className='icon'/>
          <input type="email" name="email" placeholder="Your email*" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      { /* Select Option */}
      <div className="form-group">
        <div className="input-icon">
          <FaListAlt className='icon'/>
          <select name="option" value={formData.option} onChange={handleChange} required>
            <option value="">Choose your option*</option>
            <option value="feedback">Feedback</option>
            <option value="inquiry">Inquiry</option>
            <option value="support">Support</option>
          </select>
        </div>
      </div>

      { /* Textarea for Message */}
      <div className="form-group">
        <div className="input-icon">
          <FaPen className='icon'/>
          <textarea name="message" placeholder="Your Message*" value={formData.message} onChange={handleChange} required></textarea>
        </div>
      </div>

      <button type="submit" className="submit-btn bg-[#0f1b39] text-white p-5">SEND MESSAGE</button>
    </form>
  );
}

export default SupportMessage1;