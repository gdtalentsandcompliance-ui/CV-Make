import React from 'react';
import { useResume } from '../../context/ResumeContext';

const PersonalDetailsForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();
  const { personalDetails } = resumeData;

  const handleChange = (field: string, value: string) => {
    updateResumeData('personalDetails', {
      ...personalDetails,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={personalDetails.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          required
          value={personalDetails.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="john.doe@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={personalDetails.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          type="text"
          value={personalDetails.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="New York, NY"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          LinkedIn Profile
        </label>
        <input
          type="url"
          value={personalDetails.linkedinUrl}
          onChange={(e) => handleChange('linkedinUrl', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="https://linkedin.com/in/johndoe"
        />
      </div>
    </div>
  );
};

export default PersonalDetailsForm;