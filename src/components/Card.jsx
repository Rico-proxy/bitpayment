import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Card = () => {
  const [data, setData] = useState({
    labels: Array.from({ length: 12 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Your Balance',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(255, 255, 255, 255)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
          },
        ],
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000, // Animation duration in milliseconds
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg p-4">
        <div  style={{ height: '370px', width: '300px' }}>
        <Bar data={data} options={options} />
         </div>
    </div>
    
  );
};

export default Card;
