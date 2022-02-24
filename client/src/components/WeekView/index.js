import React from 'react';

const WeekView = () => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  return (
    <div className='week'>
      {days.map(day => (
        <div key={day} className='day'>
          <div className='day-header'>
            {day}
          </div>
        </div>
      ))}
    </div>
  )
};

export default  WeekView;