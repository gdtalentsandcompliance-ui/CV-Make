import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const LanguagesForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();
  const [newLanguage, setNewLanguage] = useState('');

  const addLanguage = () => {
    if (newLanguage.trim() && !resumeData.languages.includes(newLanguage.trim())) {
      const updatedLanguages = [...resumeData.languages, newLanguage.trim()].sort();
      updateResumeData('languages', updatedLanguages);
      setNewLanguage('');
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    updateResumeData('languages', resumeData.languages.filter(lang => lang !== languageToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addLanguage();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Languages
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., English, Spanish, French"
          />
          <button
            onClick={addLanguage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Languages will be automatically sorted alphabetically
        </p>
      </div>

      {resumeData.languages.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Your Languages</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.languages.map((language) => (
              <div
                key={language}
                className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                <span>{language}</span>
                <button
                  onClick={() => removeLanguage(language)}
                  className="text-green-600 hover:text-green-800 transition-colors"
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

export default LanguagesForm;