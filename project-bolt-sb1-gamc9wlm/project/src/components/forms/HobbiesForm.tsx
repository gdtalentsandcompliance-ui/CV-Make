import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const HobbiesForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();
  const [newHobby, setNewHobby] = useState('');

  const addHobby = () => {
    if (newHobby.trim() && !resumeData.hobbies.includes(newHobby.trim())) {
      updateResumeData('hobbies', [...resumeData.hobbies, newHobby.trim()]);
      setNewHobby('');
    }
  };

  const removeHobby = (hobbyToRemove: string) => {
    updateResumeData('hobbies', resumeData.hobbies.filter(hobby => hobby !== hobbyToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addHobby();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-sm text-amber-800">
          <strong>Optional Section:</strong> Add hobbies that showcase your personality and soft skills.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Hobbies & Interests
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Photography, Reading, Hiking"
          />
          <button
            onClick={addHobby}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {resumeData.hobbies.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Your Hobbies</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.hobbies.map((hobby) => (
              <div
                key={hobby}
                className="flex items-center space-x-1 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
              >
                <span>{hobby}</span>
                <button
                  onClick={() => removeHobby(hobby)}
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HobbiesForm;