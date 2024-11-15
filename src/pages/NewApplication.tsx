import React from 'react';

export default function NewApplication() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">New Passport Application</h1>
      <p className="text-gray-600 mb-4">
        Complete the form below to apply for a new passport. Make sure to fill out all the mandatory fields.
      </p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="dob">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full address"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
