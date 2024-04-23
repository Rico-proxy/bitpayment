import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Specifics = () => {
  const data = {
    labels: ['Property Sold', 'Income', 'Expense', 'Property Rented'],
    datasets: [
      {
        data: [63876, 97125, 872335, 21224], // Example data
        backgroundColor: [
          'rgba(52, 199, 89, 0.6)',
          'rgba(0, 122, 255, 0.6)',
          'rgba(255, 204, 0, 0.6)',
          'rgba(255, 59, 48, 0.6)'
        ],
        borderColor: [
          'rgba(52, 199, 89, 1)',
          'rgba(0, 122, 255, 1)',
          'rgba(255, 204, 0, 1)',
          'rgba(255, 59, 48, 1)'
        ],
        borderWidth: 1,
        cutout: '70%'
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 10,
          color: 'white'
        }
      }
    }
  };

  return (
    <div className="bg text-white p-6 rounded-lg shadow-lg flex justify-between items-center space-x-4">
      <div className="space-y-4 flex-1">
        <h2 className="text-xl font-bold">Specifics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Repeat the below div for each stat you want to display */}
          <div className="flex items-center">
            <div className="h-2 w-2 bg-green-500 mr-2"></div>
            <div>
              <p className="text-lg font-semibold">63,876</p>
              <p className="text-sm">Property Sold</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-blue-500 mr-2"></div>
            <div>
              <p className="text-lg font-semibold">$97,125</p>
              <p className="text-sm">Income</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-yellow-500 mr-2"></div>
            <div>
              <p className="text-lg font-semibold">$872,335</p>
              <p className="text-sm">Expense</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-red-500 mr-2"></div>
            <div>
              <p className="text-lg font-semibold">21,224</p>
              <p className="text-sm">Property Rented</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none w-64 h-64"> {/* Adjust size as needed */}
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Specifics;
