import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const SkillsForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !resumeData.skills.includes(newSkill.trim())) {
      updateResumeData('skills', [...resumeData.skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateResumeData('skills', resumeData.skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Skills
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., React, JavaScript, Python"
          />
          <button
            onClick={addSkill}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {resumeData.skills.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Your Skills</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Include both technical and soft skills. Focus on skills relevant to your target job.
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;