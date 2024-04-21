import React, { useState, useRef, useEffect } from 'react';

const SetPinComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  // This will be called when the "Set Pin" button is clicked
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // This will be called when the "Submit" button in the form is clicked
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the PIN here
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
            className="bg p-6 rounded-lg"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col space-y-3">
              <label htmlFor="pin" className="text-lg text-white">Set Transaction PIN:</label>
              <input
                id="pin"
                name="pin"
                type="password"
                className="border-2 border-gray-300 rounded p-2"
                required
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
