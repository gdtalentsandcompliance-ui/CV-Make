import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Save, Download } from 'lucide-react';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import ProfessionalSummaryForm from './forms/ProfessionalSummaryForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import ExperienceForm from './forms/ExperienceForm';
import LanguagesForm from './forms/LanguagesForm';
import HobbiesForm from './forms/HobbiesForm';
import DeclarationForm from './forms/DeclarationForm';
import ResumePreview from './ResumePreview';
import CustomizationPanel from './CustomizationPanel';
import { generatePDF } from '../utils/pdfGenerator';
import { useResume } from '../context/ResumeContext';

const steps = [
  { id: 'personal', title: 'Personal Details', component: PersonalDetailsForm },
  { id: 'summary', title: 'Professional Summary', component: ProfessionalSummaryForm },
  { id: 'skills', title: 'Skills', component: SkillsForm },
  { id: 'projects', title: 'Projects', component: ProjectsForm },
  { id: 'experience', title: 'Experience', component: ExperienceForm },
  { id: 'languages', title: 'Languages', component: LanguagesForm },
  { id: 'hobbies', title: 'Hobbies', component: HobbiesForm },
  { id: 'declaration', title: 'Declaration', component: DeclarationForm },
];

const ResumeBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCustomization, setShowCustomization] = useState(false);
  const { resumeData, selectedTemplate, selectedFont, selectedColors } = useResume();

  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      await generatePDF(resumeData, selectedTemplate, selectedFont, selectedColors);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Build Your Resume</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCustomization(!showCustomization)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Customize
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    index <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-1 transition-colors ${
                      index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-2 text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 min-h-[600px]">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {steps[currentStep].title}
              </h2>
              
              <CurrentStepComponent />

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="relative">
            <div className="sticky top-4">
              <ResumePreview />
            </div>
          </div>
        </div>

        {/* Customization Panel */}
        {showCustomization && (
          <div className="mt-8">
            <CustomizationPanel onClose={() => setShowCustomization(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;