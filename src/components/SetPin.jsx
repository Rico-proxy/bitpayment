import React, { useState, useRef, useEffect } from 'react';

const SetPinComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [pin, setPin] = useState('');
  const [showToast, setShowToast] = useState(false); // State to manage toast visibility
  const formRef = useRef(null);

  const userId = sessionStorage.getItem('userId');

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error('User ID not found in session storage');
      return;
    }

    const endpoint = "https://api.nuhu.xyz/api/Wallet/set-pin";
    const payload = { pin, userId };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('PIN set successfully:', jsonResponse);
        setPin(''); // Reset pin input
        setShowForm(false); // Close form
        setShowToast(true); // Show toast message
      } else {
        console.error('Failed to set PIN:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    const eventListener = 'mousedown';
    if (showForm) {
      document.addEventListener(eventListener, handleClickOutside);
    } else {
      document.removeEventListener(eventListener, handleClickOutside);
    }

    return () => {
      document.removeEventListener(eventListener, handleClickOutside);
    };
  }, [showForm]);

  return (
    <div className="flex flex-col items-center space-y-4 z-40">
      <button
        className="flex items-center bg-black text-white text-[12px] md:text-xl px-3 py-1 rounded-lg animate-pulse hover:animate-none"
        onClick={handleButtonClick}
      >
        Set Pin
      </button>

      {showForm && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <form ref={formRef} className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleFormSubmit}>
            <div className="flex flex-col space-y-3">
              <label htmlFor="pin" className="text-lg text-black">Set Transaction PIN:</label>
              <input
                id="pin"
                name="pin"
                type="number"
                className="border-2 text-black border-gray-300 rounded p-2"
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

      {showToast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg">
          PIN set successfully!
        </div>
      )}
    </div>
  );
};

export default SetPinComponent;
