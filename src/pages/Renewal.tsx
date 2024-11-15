import React from 'react';

export default function Renewal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Renew Passport</h1>
      <p className="text-gray-600 mb-4">
        To renew your existing passport, provide the required details and upload the necessary documents.
      </p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="passportNumber">
            Passport Number
          </label>
          <input
            id="passportNumber"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your current passport number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="expiryDate">
            Expiry Date
          </label>
          <input
            id="expiryDate"
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="document">
            Upload Supporting Document
          </label>
          <input
            id="document"
            type="file"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4"
        >
          Submit Renewal Request
        </button>
      </form>
    </div>
  );
}
