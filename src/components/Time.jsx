import React, { useState, useEffect } from 'react';

const TimeBasedGreeting = () => {
  const [greeting, setGreeting] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting('Good Morning');
        setEmoji('☀️');
      } else if (hour < 18) {
        setGreeting('Good Afternoon');
        setEmoji('☀️');
      } else if (hour < 22) {
        setGreeting('Good Evening');
        setEmoji('🌓');
      } else {
        setGreeting('Good Night');
        setEmoji('🌓');
      }
    };

    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className='font-semibold text-xl  text-white'>
      {greeting} <span className="animate-pulse ">{emoji}</span>
    </h1>
  );
};

export default TimeBasedGreeting;
