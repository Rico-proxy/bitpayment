import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SafeDeals = ({ totalDeals, activeDeals, btcAmount }) => {
  const percentage = (activeDeals / totalDeals) * 100;

  return (
    <div className=" flex flex-row items-center text-center space-x-8 bg-[#0f1b39] rounded-lg shadow-lg p-20 pt-20">
      <h2 className="text-xl font-bold mr-10 text-white">Safe deals</h2>
      <div style={{ width: '200px', height: '200px', margin: 'auto' }}>
        <CircularProgressbar
          value={percentage}
          text={`${activeDeals} active deals`}
          styles={buildStyles({
            strokeLinecap: 'butt',
            textSize: '16px',
            pathColor: `rgba(255, 136, 136, ${percentage / 50})`,
            textColor: 'white',
            trailColor: 'white',
            backgroundColor: '#0f1b39',
           
          })}
        />
      </div>
      <div className="text-center mt-4">
        <p className="text-2xl font-semibold text-white">{btcAmount} BTC</p>
        <p className="text-white">{activeDeals} active deals</p>
      </div>
    </div>
  );
};

export default SafeDeals;
