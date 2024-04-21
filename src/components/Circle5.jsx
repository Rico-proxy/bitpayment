import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Circle4 = () => {
  const data = {
    datasets: [
      {
        label: 'Progress',
        data: [150, 100], // Assuming the value is 60%
        backgroundColor: ['green', '#ffff'], // Primary color and transparent for the unfilled part
        borderColor: ['transparent'], // Hide the border
        cutout: '90%', // Increase the cutout percentage to make the doughnut thinner
        borderWidth: 1,
        rotation: 270, // Rotate to start the progress from the top
        circumference: 360, // Complete circle
        borderRadius: 20, // Round corners
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Hide the tooltip
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '50px', height: '50px' }}> {/* Reduced size */}
      <Doughnut data={data} options={options} />
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '16px', // Reduced font size
      }}>
        
      </div>
    </div>
  );
};

export default Circle4;
