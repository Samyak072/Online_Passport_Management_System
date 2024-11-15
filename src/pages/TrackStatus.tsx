import React, { useState } from 'react';

export default function TrackStatus() {
  const [applicationId, setApplicationId] = useState('');
  const [status, setStatus] = useState('');

  const handleTrack = () => {
    // Simulate fetching status from backend
    setTimeout(() => {
      setStatus('Your application is under processing.');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Track Application Status</h1>
      <p className="text-gray-600 mb-4">
        Enter your application ID below to track the status of your passport application.
      </p>
      <div className="space-y-4">
        <input
          type="text"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          placeholder="Enter your Application ID"
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleTrack}
          className="btn btn-primary"
        >
          Track Status
        </button>
      </div>
      {status && (
        <div className="mt-6 bg-blue-50 p-4 rounded-md">
          <p className="text-blue-700">{status}</p>
        </div>
      )}
    </div>
  );
}
