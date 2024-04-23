import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MovingLineChart = () => {
  const chartRef = useRef(null);
  const [dataIndex, setDataIndex] = useState(0);
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 20 }, (_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: 'Income',
        data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)),
        fill: true,
        backgroundColor: 'rgba(135, 206, 250, 0.2)',
        borderColor: 'rgb(135, 206, 250)',
        pointBackgroundColor: 'rgb(135, 206, 250)',
        tension: 0.4,
      },
      {
        label: 'Expense',
        data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)),
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        tension: 0.4,
      },
    ],
  });

  const updateChartData = () => {
    const newDataset = chartData.datasets.map((dataset) => ({
      ...dataset,
      data: [...dataset.data.slice(1), Math.floor(Math.random() * 100)],
    }));

    setChartData({
      ...chartData,
      datasets: newDataset,
      labels: Array.from({ length: 20 }, (_, i) => `Week ${i + 1 + dataIndex}`),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prevIndex) => prevIndex + 1);
      updateChartData();
    }, 3000);

    return () => clearInterval(interval);
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
        display: true,
        position: 'top',
        labels: {
          color: 'rgb(255, 255, 255)',
        },
      },
    },
  };

  return (
    <div className="chart-activity" style={{ position: 'relative', height: '300px' }}>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default MovingLineChart;
