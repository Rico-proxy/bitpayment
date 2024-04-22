import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Circle2 = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 20, 81, 56, 55, 20],
        fill: false,
        backgroundColor: '#00ff00', // Replace with your gradient or solid color
        borderColor: '#00ff00', // Replace with your gradient or solid color
        tension: 0.4, // This will make the line smooth
        pointRadius: 0, // Hide the data points
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false, // Hide X axis labels
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false, // Hide Y axis labels
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    maintainAspectRatio: false, // You can set this to true if you want it to maintain aspect ratio
  };

  return (
    <div style={{ width: '80px', height: '70px' }}> {/* Adjust the width and height as needed */}
    <Line data={data} options={options} />
  </div>
  );
};

export default Circle2;
