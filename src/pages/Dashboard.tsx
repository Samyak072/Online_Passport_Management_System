import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { CreditCard, RefreshCw, Search, FileText, Download } from 'lucide-react';
import jsPDF from 'jspdf'; // Make sure to install this library

export default function Dashboard() {
  const { user } = useAuthStore(); // Get the user data from the auth store
  const [activeTab, setActiveTab] = useState('overview'); // State for active tab
  const [isFormCompleted, setIsFormCompleted] = useState(true); // State for form completion
  const navigate = useNavigate(); // Navigation hook

  // Function to download the application form as a PDF
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Passport Application Form", 10, 10);
    doc.text(`Applicant Name: ${user?.name || 'N/A'}`, 10, 20);
    doc.text("Passport Type: Standard", 10, 30); // Replace with actual data
    doc.text("Date of Birth: 01/01/2000", 10, 40); // Replace with actual data
    doc.text("Nationality: Indian", 10, 50); // Replace with actual data
    // Add more form fields as necessary

    doc.save("Application_Form.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}</h1>
        <p className="text-gray-600 mt-2">
          Manage your passport applications and track their status
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* New Application Card */}
        <div
          className="bg-white p-6 rounded-lg shadow-sm cursor-pointer"
          onClick={() => navigate('/new-application')}
        >
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">New Application</h3>
              <p className="text-gray-600">Apply for a new passport</p>
            </div>
          </div>
        </div>

        {/* Renewal Card */}
        <div
          className="bg-white p-6 rounded-lg shadow-sm cursor-pointer"
          onClick={() => navigate('/renewal')}
        >
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <RefreshCw className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Renewal</h3>
              <p className="text-gray-600">Renew existing passport</p>
            </div>
          </div>
        </div>

        {/* Track Status Card */}
        <div
          className="bg-white p-6 rounded-lg shadow-sm cursor-pointer"
          onClick={() => navigate('/track-status')}
        >
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Search className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Track Status</h3>
              <p className="text-gray-600">Check application status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/4 py-4 px-1 text-center border-b-2 font-medium`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`${
                activeTab === 'applications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/4 py-4 px-1 text-center border-b-2 font-medium`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`${
                activeTab === 'documents'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/4 py-4 px-1 text-center border-b-2 font-medium`}
            >
              Documents
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`${
                activeTab === 'profile'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/4 py-4 px-1 text-center border-b-2 font-medium`}
            >
              Profile
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Recent Applications
              </h3>
              <p className="text-gray-600">
                Start a new passport application or renew an existing one
              </p>
              <button
                className="mt-4 btn btn-primary"
                onClick={() => navigate('/new-application')}
              >
                Start New Application
              </button>
              {isFormCompleted && (
                <button
                  className="mt-4 ml-4 btn btn-secondary flex items-center"
                  onClick={handleDownload}
                >
                  <Download className="mr-2" /> Download Application Form
                </button>
              )}
            </div>
          )}

          {/* Additional content for other tabs */}
          {activeTab === 'applications' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Applications</h2>
              <p className="text-gray-600">View and manage your submitted applications.</p>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Documents</h2>
              <p className="text-gray-600">Upload and manage required documents.</p>
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Profile</h2>
              <p className="text-gray-600">Update your personal information and settings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
