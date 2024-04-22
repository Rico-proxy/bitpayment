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
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto  p-5 shadow-lg">
      {/* Input for Name */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <FaUser className="text-white"/>
          <input type="text" name="name" placeholder="Your name*" value={formData.name} onChange={handleChange} required
                 className="flex-1 p-2 border border-gray-300 rounded outline-none" />
        </label>
      </div>

      {/* Input for Phone */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <FaPhone className="text-white"/>
          <input type="tel" name="phone" placeholder="Your phone*" value={formData.phone} onChange={handleChange} required
                 className="flex-1 p-2 border border-gray-300 rounded outline-none" />
        </label>
      </div>

      {/* Input for Email */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <FaEnvelope className="text-white"/>
          <input type="email" name="email" placeholder="Your email*" value={formData.email} onChange={handleChange} required
                 className="flex-1 p-2 border border-gray-300 rounded outline-none" />
        </label>
      </div>

      {/* Select Option */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <FaListAlt className="text-white"/>
          <select name="option" value={formData.option} onChange={handleChange} required
                  className="flex-1 p-2 border border-gray-300 rounded outline-none bg-white">
            <option value="">Choose your option*</option>
            <option value="feedback">Feedback</option>
            <option value="inquiry">Inquiry</option>
            <option value="support">Support</option>
          </select>
        </label>
      </div>

      {/* Textarea for Message */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <FaPen className="text-white"/>
          <textarea name="message" placeholder="Your Message*" value={formData.message} onChange={handleChange} required
                    className="flex-1 p-2 border border-gray-300 rounded outline-none" rows="5"></textarea>
        </label>
      </div>

      <button type="submit" className="w-full py-3 px-5 bg  text-white rounded transition duration-200">
        SEND MESSAGE
      </button>
    </form>
  );
}

export default SupportMessage1;