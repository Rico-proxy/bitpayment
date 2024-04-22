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
    <form onSubmit={handleSubmit} className="p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center">
          <FaUser className="mr-2" />Your name*
        </label>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center">
          <FaPhone className="mr-2" />Your phone*
        </label>
        <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center">
          <FaEnvelope className="mr-2" />Your email*
        </label>
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2  items-center">
          <FaListAlt className="mr-2" />Choose your option*
        </label>
        <select name="option" value={formData.option} onChange={handleChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" required>
          <option value="">Select an option</option>
          <option value="feedback">Feedback</option>
          <option value="inquiry">Inquiry</option>
          <option value="support">Support</option>
        </select>
      </div>

      <div className="mb-6">
        <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center">
          <FaPen className="mr-2" />Your Message*
        </label>
        <textarea name="message" placeholder="Type your message here" value={formData.message} onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" rows="4" required></textarea>
      </div>

      <button type="submit" className="bg-[#0f1b39] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        SEND MESSAGE
      </button>
    </form>
  );
}

export default SupportMessage;
