import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const ExperienceForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      duration: '',
      description: ''
    };
    updateResumeData('experience', [...resumeData.experience, newExperience]);
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updatedExperience = resumeData.experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    updateResumeData('experience', updatedExperience);
  };

  const removeExperience = (index: number) => {
    updateResumeData('experience', resumeData.experience.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Work Experience</h3>
        <button
          onClick={addExperience}
          className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Experience</span>
        </button>
      </div>

      {resumeData.experience.map((exp, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900">Experience {index + 1}</h4>
            <button
              onClick={() => removeExperience(index)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Google Inc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Software Engineer"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              value={exp.duration}
              onChange={(e) => updateExperience(index, 'duration', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Jan 2022 - Present"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              rows={4}
              value={exp.description}
              onChange={(e) => updateExperience(index, 'description', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Describe your responsibilities, achievements, and impact..."
            />
          </div>
        </div>
      ))}

      {resumeData.experience.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No work experience added yet. Click "Add Experience" to get started.</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;