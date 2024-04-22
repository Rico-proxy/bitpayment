import {React, useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import axios from 'axios';
import TotalBalance from './Total';
ChartJS.register(CategoryScale, LinearScale, BarElement);

const MainBalance = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
   // Retrieve user ID from session storage instead of local storage
   const userId = sessionStorage.getItem('userId');
    let intervalId = null;

    const fetchUserData = () => {
      if (userId) {
        axios.get(`https://api.nuhu.xyz/api/Admin/user/${userId}`)
          .then(response => {
            setUserInfo(response.data);
          })
          .catch(error => {
            console.error('Error fetching user details:', error);
          });
      }
    };

    // Call fetchUserData immediately and then set up the interval
    fetchUserData();
    intervalId = setInterval(fetchUserData, 10000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empt

  const data = {
    labels: [''],
    datasets: [
      {
        data: [75], // This value should represent the actual progress
        backgroundColor: ['rgba(255, 255, 255, 0.6)'],
        borderWidth: 0,
        borderRadius: 20,
        barThickness: 6, // Adjust bar thickness if needed
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        display: false,
        stacked: true,
      },
      y: {
        display: false,
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{
      background: 'linear-gradient(160deg, #7b7bea, #0006ff)',
      padding: '20px',
      borderRadius: '15px',
      color: 'white',
      
      width: '160%', // Use 100% to fill the container or set a specific width
      maxWidth: '500px', // Set a max-width for larger screens
      fontFamily: 'Arial',
      fontSize: '18px',
      boxSizing: 'border-box', // Ensures padding is included in width
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span>Main Balance</span>
        <span>...</span>
      </div>
      <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        <TotalBalance/>
      </div>
      <div style={{ height: '10px', marginBottom: '20px' }}>
        <Bar data={data} options={options} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '14px' }}>
        <div>
          <div>VALID THRU</div>
          <div>08/21</div>
        </div>
        <div>
          <div>CARD HOLDER</div>
          <div>Adam Joe</div>
        </div>
        <div>
          <div>NUMBER</div>
          <div>**** **** **** 1234</div>
        </div>
      </div>
    </div>
  );
};

export default MainBalance;
