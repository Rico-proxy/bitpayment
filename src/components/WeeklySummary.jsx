import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const WeeklySummary = () => {
  const doughnutData = {
    labels: ['Income', 'Expense', 'Unknown'],
    datasets: [
      {
        data: [30, 60, 10],
        backgroundColor: [
          'rgb(255, 159, 64)',
          'rgb(54, 162, 235)',
          'rgb(201, 203, 207)'
        ],
        hoverOffset: 4,
        cutout: '70%',
      },
    ],
  };

  const barData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Daily',
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend for bar chart
      },
    },
  };

  return (
    <div className='bg' style={{
     
      borderRadius: '20px',
      padding: '20px',
      color: 'white',
      width: '90%',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
    }}>
      <h2 style={{ marginTop: 0 }}>Weekly Summary</h2>
      <Doughnut data={doughnutData} />
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
        {doughnutData.labels.map((label, index) => (
          <li key={label} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              width: '12px',
              height: '12px',
              backgroundColor: doughnutData.datasets[0].backgroundColor[index],
              display: 'inline-block',
              marginRight: '5px',
            }} />
            {label} {doughnutData.datasets[0].data[index]}%
          </li>
        ))}
      </ul>
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default WeeklySummary;
