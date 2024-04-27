import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActivityLog = () => {
  const paginate = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };
  
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Display only 20 items per page

  useEffect(() => {
    fetchActivities();
  }, [currentPage]); // Fetch activities whenever page changes

  const fetchActivities = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.nuhu.xyz/api/Admin/activities');
      // Get only the last 20 activities from the response data
      const last20Activities = response.data.slice(-20);
      setActivities(last20Activities);
    } catch (error) {
      console.error('Failed to fetch activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className=" p-4 ">
      <h2 className="text-2xl font-bold mb-4">Activity Log</h2>
      <div className="overflow-hidden bg-[#0f1b39] text-white">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">User ID</th>
              <th className="px-6 py-3">Sender Email</th>
              <th className="px-6 py-3">Activity Type</th>
              <th className="px-6 py-3">Timestamp</th>
              <th className="px-6 py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {paginate(activities, currentPage, itemsPerPage).map(activity => (
              <tr key={activity.userId} className="border-b hover:bg-gray-50 hover:text-black">
                <td className="px-6 py-4">{activity.userId}</td>
                <td className="px-6 py-4">{activity.userEmail}</td>
                <td className="px-6 py-4">{activity.activityType}</td>
                <td className="px-6 py-4">{new Date(activity.timestamp).toLocaleString()}</td>
                <td className="px-6 py-4">{activity.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: Math.ceil(activities.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
