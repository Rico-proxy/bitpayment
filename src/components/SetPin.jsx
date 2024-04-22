import React, { useState, useRef, useEffect } from 'react';

const SetPinComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [pin, setPin] = useState('');
  const formRef = useRef(null);

  // Fetch userId from sessionStorage
  const userId = sessionStorage.getItem('userId');

  // This will be called when the "Set Pin" button is clicked
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // This will be called when the "Submit" button in the form is clicked
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Ensure we have a userId before attempting to set the pin
    if (!userId) {
      console.error('User ID not found in session storage');
      return;
    }

    const endpoint = "https://api.nuhu.xyz/api/Wallet/set-pin";
    const payload = {
      pin: pin,
      userId: userId
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        // Handle the success response here
        console.log('PIN set successfully:', jsonResponse);
        alert('PIN set successfully!');
      } else {
        // Handle HTTP errors here
        console.error('Failed to set PIN:', response.statusText);
        alert('Failed to set PIN. Please try again.');
      }
    } catch (error) {
      // Handle network errors here
      console.error('Network error:', error);
      alert('Network error. Please try again.');
    }

    // Reset form state
    setPin('');
    setShowForm(false);
  };

  // This will close the form if the area outside the form is clicked
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  // Hook to listen for clicks outside the form
  useEffect(() => {
    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

  return (
    <div className="flex flex-col items-center space-y-4 z-40">
      <button
        className="flex items-center bg-black text-white text-xl px-3 py-1 rounded-lg animate-pulse hover:animate-none"
        onClick={handleButtonClick}
      >
        Set Pin
      </button>
      
      {showForm && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <form
            ref={formRef}
            className="bg-white p-6 rounded-lg shadow-lg"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col space-y-3">
              <label htmlFor="pin" className="text-lg text-black">Set Transaction PIN:</label>
              <input
                id="pin"
                name="pin"
                type="password"
                className="border-2 border-gray-300 rounded p-2"
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SetPinComponent;
