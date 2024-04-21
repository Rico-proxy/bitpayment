import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const doughnutData = {
  labels: ['Income', 'Expense', 'Unknown'],
  datasets: [
    {
      label: 'Summary',
      data: [30, 46, 10],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(201, 203, 207, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const barData = {
  labels: ['Sun', 'Mon', 'Wed', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Daily',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const barOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Chart = () => {
  return (
    <div className="bg w-full chart flex flex-col items-center justify-center h-full p-4  text-white ">
      <h2 className="text-lg font-semibold mb-2">Weekly Summary</h2>
      <div className="mb-4 w-full h-1/2">
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </div>
      <div className="w-full h-1/2">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default Chart;
