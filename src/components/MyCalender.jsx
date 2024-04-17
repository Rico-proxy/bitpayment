import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='pt-20 '>
      
      <Calendar
        onChange={onChange}
        value={date}
        className=''
      />
    </div>
  );
};

export default MyCalendar;
