import React, { useRef } from 'react';
import { FiCopy } from 'react-icons/fi'; // Make sure you have react-icons installed
import toast from 'react-hot-toast';

const Copy = () => {
  const divToCopyRef = useRef(null);

  const handleCopy = () => {
    // Get the text from the div we want to copy
    const text = divToCopyRef.current.textContent;
    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Text copied to clipboard'); // Show toast notification on success
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy text'); // Show toast notification on failure
    });
  };

  return (
    <div className='text-sm font-medium'>
      <div ref={divToCopyRef} className="content-to-copy  text-sm">
      bc1qzwc4e8xwpar0e7zqd<span className='hidden'>werz29pavsjy8drqlqnag</span>
      <button onClick={handleCopy} className="copy-button ml-2">
        <FiCopy size={20} />
      </button>
      </div>
     
      
    </div>
  );
};

export default Copy;
