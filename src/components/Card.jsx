import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Card = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateData = () => {
    return Array.from({ length: 12 }, () => ({
      amount: Math.floor(Math.random() * 1000),
      color: getRandomColor(),
    }));
  };

  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: 'Your Balance',
        data: generateData().map((d) => d.amount),
        backgroundColor: generateData().map((d) => d.color),
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateData();
      setChartData({
        labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
        datasets: [
          {
            ...chartData.datasets[0],
            data: newData.map((d) => d.amount),
            backgroundColor: newData.map((d) => d.color),
          },
        ],
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [containerStyle, setContainerStyle] = useState({ height: '370px', width: '300px' });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Example breakpoint at 768px
        setContainerStyle({ height: '250px', width: '200px' });
      } else {
        setContainerStyle({ height: '400px', width: '300px' });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
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
    <div className="bg rounded-lg mx-8 p-4 md:p-0 md:mx-0">
      <div style={containerStyle}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Card;
