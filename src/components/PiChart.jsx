import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PiChart = () => {
  const data = {
    labels: ['Pink', 'Yellow', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [100, 100, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4,
        
        
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 10,
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className='bg' style={{
      background: '',
      borderRadius: '20px',
      padding: '20px',
      color: 'white',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
      width: '300px',
      height: '400px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
      textAlign: 'center',
    }}>
      <h2 style={{ margin: '0 0 20px 0' }}>Pie Chart</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PiChart;
