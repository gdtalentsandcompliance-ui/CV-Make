import React from 'react';
import { useResume } from '../context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const ResumePreview: React.FC = () => {
  const { resumeData, selectedFont, selectedColors } = useResume();

  const fontFamily = selectedFont === 'Times New Roman' ? 'serif' : 
                    selectedFont === 'Calibri' ? 'sans-serif' : 
                    'Inter';

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-8" style={{ fontFamily }}>
        <div id="resume-content" className="space-y-6">
          {/* Header */}
          <div className="text-center border-b border-gray-200 pb-6">
            <h1 
              className="text-3xl font-bold mb-2"
              style={{ color: selectedColors.primary }}
            >
              {resumeData.personalDetails.name || 'Your Name'}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              {resumeData.personalDetails.email && (
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>{resumeData.personalDetails.email}</span>
                </div>
              )}
              {resumeData.personalDetails.phone && (
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span>{resumeData.personalDetails.phone}</span>
                </div>
              )}
              {resumeData.personalDetails.location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{resumeData.personalDetails.location}</span>
                </div>
              )}
              {resumeData.personalDetails.linkedinUrl && (
                <div className="flex items-center space-x-1">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </div>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          {resumeData.professionalSummary && (
            <div>
              <h2 
                className="text-lg font-semibold mb-3 border-b border-gray-100 pb-1"
                style={{ color: selectedColors.secondary }}
              >
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                {resumeData.professionalSummary}
              </p>
            </div>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <div>
              <h2 
                className="text-lg font-semibold mb-3 border-b border-gray-100 pb-1"
                style={{ color: selectedColors.secondary }}
              >
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div>
              <h2 
                className="text-lg font-semibold mb-3 border-b border-gray-100 pb-1"
                style={{ color: selectedColors.secondary }}
              >
                Work Experience
              </h2>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                      <span className="text-sm text-gray-600">{exp.duration}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {resumeData.projects.length > 0 && (
            <div>
              <h2 
                className="text-lg font-semibold mb-3 border-b border-gray-100 pb-1"
                style={{ color: selectedColors.secondary }}
              >
                Projects
              </h2>
              <div className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-600">{project.duration}</span>
                    </div>
                    {project.technologies && (
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Technologies: {project.technologies}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {resumeData.languages.length > 0 && (
            <div>
              <h2 
                className="text-lg font-semibold mb-3 border-b border-gray-100 pb-1"
                style={{ color: selectedColors.secondary }}
              >
                Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {resumeData.hobbies.length > 0 && (
            <div>
              <h2 
                className="text-lg font-semibold mb-3 border-b border-gray-100 pb-1"
                style={{ color: selectedColors.secondary }}
              >
                Hobbies & Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Declaration */}
          {resumeData.declaration && (
            <div>
              <h2 
                className="text-lg font-semibold mb-3 border-b border-gray-100 pb-1"
                style={{ color: selectedColors.secondary }}
              >
                Declaration
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resumeData.declaration}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;