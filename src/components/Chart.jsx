import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the chart components we will be using
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChartComponent = () => {
  // Ref to the chart element to access its context for gradient creation
  const chartRef = React.useRef(null);

  const data = {
    labels: ['02:00', '02:30', '03:00', '03:30', '04:00', '04:30'], // Your labels
    datasets: [
      {
        label: 'This month',
        data: [65, 59, 80, 81, 56, 55], // Your data
        fill: false, // No fill
        borderColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
          gradient.addColorStop(0, '#0d162c'); // Start with the shade of blue
          gradient.addColorStop(1, '#000000'); // Transition to black
          return gradient;
        },
        tension: 0.4,
      },
      {
        label: 'Total balance',
        data: [28, 48, 40, 19, 86, 27], // Another set of data
        fill: false, // No fill
        borderColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
          gradient.addColorStop(0, '#0d162c'); // Start with the shade of blue
          gradient.addColorStop(1, '#000000'); // Transition to black
          return gradient;
        },
        tension: 0.4,
      }
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Balance Statistic',
      },
    },
  };

  const chartContainerStyle = {
    width: '100%',
    height: '700px',
    margin: 'auto', // Center the chart
  };

  return (
    <div style={chartContainerStyle}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;
