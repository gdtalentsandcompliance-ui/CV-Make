import React from 'react';
import { useResume } from '../../context/ResumeContext';

const DeclarationForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>Final Step:</strong> Review and customize your declaration statement.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Declaration Statement
        </label>
        <textarea
          rows={4}
          value={resumeData.declaration}
          onChange={(e) => updateResumeData('declaration', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="I hereby declare that all the information provided above is true and accurate to the best of my knowledge."
        />
        <p className="text-sm text-gray-500 mt-1">
          This statement affirms the truthfulness of your resume content
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">Review Your Resume</h3>
        <p className="text-sm text-blue-800">
          Take a moment to review all sections of your resume in the live preview. 
          Make sure all information is accurate and complete before downloading.
        </p>
      </div>
    </div>
  );
};

export default DeclarationForm;