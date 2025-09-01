import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const ProfessionalSummaryForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAISummary = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aiSummary = `Experienced professional with a strong background in ${resumeData.skills.slice(0, 3).join(', ')} and proven expertise in delivering high-quality results. Passionate about leveraging cutting-edge technologies to solve complex business challenges and drive innovation. Demonstrated ability to work effectively in collaborative environments while maintaining attention to detail and meeting project deadlines.`;
    
    updateResumeData('professionalSummary', aiSummary);
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Professional Summary
          </label>
          <button
            onClick={generateAISummary}
            disabled={isGenerating}
            className="flex items-center space-x-1 px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors"
          >
            {isGenerating ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            <span>{isGenerating ? 'Generating...' : 'AI Generate'}</span>
          </button>
        </div>
        <textarea
          rows={6}
          value={resumeData.professionalSummary}
          onChange={(e) => updateResumeData('professionalSummary', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Write a compelling professional summary that highlights your key achievements and career objectives..."
        />
        <p className="text-sm text-gray-500 mt-1">
          Tip: Include 2-3 key achievements and your career goals
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;