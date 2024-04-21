import React from 'react';
import { FaChartPie } from 'react-icons/fa';

const Specifics = () => {
  return (
    <div className="bg text-white p-6 rounded-lg shadow-lg space-y-4 relative">
      <h2 className="text-xl font-bold">Specifics</h2>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem</p>
      
      {/* Placeholder for the Doughnut Chart */}
      <div className="absolute right-6 top-6">
        <FaChartPie className="text-4xl" />
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-base">35%</span>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="h-1 w-4 bg-green-400 mr-2"></div>
          <div>
            <p className="text-lg font-semibold">63,876</p>
            <p className="text-sm">Property Sold</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-1 w-4 bg-blue-400 mr-2"></div>
          <div>
            <p className="text-lg font-semibold">$97,125</p>
            <p className="text-sm">Income</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-1 w-4 bg-yellow-400 mr-2"></div>
          <div>
            <p className="text-lg font-semibold">$872,335</p>
            <p className="text-sm">Expense</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-1 w-4 bg-red-400 mr-2"></div>
          <div>
            <p className="text-lg font-semibold">21,224</p>
            <p className="text-sm">Property Rented</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifics;
