import React from 'react';
import { FileText, Download, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const savedResumes = [
    { id: '1', name: 'Software Engineer Resume', template: 'Modern Professional', lastModified: '2 days ago' },
    { id: '2', name: 'Marketing Manager Resume', template: 'Creative Designer', lastModified: '1 week ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}</h1>
          <p className="text-gray-600">Manage your resumes and templates</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">2</h3>
                <p className="text-sm text-gray-600">Saved Resumes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Download className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">5</h3>
                <p className="text-sm text-gray-600">Downloads</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-2">
              <FileText className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{user?.premiumTemplates.length || 0}</h3>
                <p className="text-sm text-gray-600">Premium Templates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <Link
              to="/builder"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Create New Resume</span>
            </Link>
            <Link
              to="/templates"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>Browse Templates</span>
            </Link>
          </div>
        </div>

        {/* Saved Resumes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Resumes</h2>
          
          {savedResumes.length > 0 ? (
            <div className="space-y-4">
              {savedResumes.map((resume) => (
                <div key={resume.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">{resume.name}</h3>
                      <p className="text-sm text-gray-600">
                        Template: {resume.template} • Modified {resume.lastModified}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="mb-4">No resumes created yet</p>
              <Link
                to="/builder"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Create Your First Resume</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;