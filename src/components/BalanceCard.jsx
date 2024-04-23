import React from 'react';
import { BsArrowDownLeft, BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import TotalBalance from './Total';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [8, 4],
      },
    },
  },
};

const data = {
  labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  datasets: [
    {
      label: 'Income',
      data: [400, 600, 700, 800, 600, 800, 750],
      fill: false,
      backgroundColor: '#00ff00',
      borderColor: '#00ff00',
    },
    {
      label: 'Expense',
      data: [200, 300, 400, 500, 300, 500, 450],
      fill: false,
      backgroundColor: '#ff00',
      borderColor: '#ff0000',
    },
  ],
};

export default function BalanceSummaryCard() {
  return (
    <div style={{ }} className="balance-summary-card bg">
      <div className="header">
        <h2>Your Balance Summary</h2>
        {/* Insert toggle buttons here */}
      </div>
      <div className="balance-info">
        <div  className="flex flex-row space-x-2 items-center">
             <div className="bg-black p-3 rounded-lg text-white">
                <BsArrowDownLeft className="hover:animate-bounce"/>
             </div>
            <div className='flex flex-col font-bold'>
            <span>TOTAL</span>
             <span><TotalBalance/></span>
            </div>
          
        </div>
        <div className="flex flex-row space-x-2 items-center">
             <div className="bg-black p-3 rounded-lg text-white">
                <BsArrowUpRight className="hover:animate-bounce"/>
             </div>
            <div className='flex flex-col font-bold'>
            <span>Expense</span>
             <span>$459,234.08</span>
            </div>
          
        </div>
      </div>
      <Line className='' data={data} options={options} />
    </div>
  );
}
