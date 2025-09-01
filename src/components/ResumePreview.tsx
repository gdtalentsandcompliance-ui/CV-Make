import React from 'react';
import { useResume } from '../context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ResumePreview: React.FC = () => {
  const { resumeData, selectedFont, selectedColors } = useResume();

  const fontFamily = selectedFont === 'Times New Roman' ? 'serif' : 
                    selectedFont === 'Calibri' ? 'sans-serif' : 
                    selectedFont === 'Georgia' ? 'serif' :
                    selectedFont === 'Arial' ? 'sans-serif' :
                    selectedFont === 'Helvetica' ? 'sans-serif' :
                    'Inter, system-ui, sans-serif';

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-8" style={{ fontFamily, lineHeight: '1.5' }}>
        <div id="resume-content" className="space-y-6 max-w-none">
          {/* Header */}
          <div className="text-center border-b-2 pb-6" style={{ borderColor: selectedColors.primary }}>
            <h1 
              className="text-3xl font-bold mb-3"
              style={{ color: selectedColors.primary }}
            >
              {resumeData.personalDetails.name || 'Your Name'}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: selectedColors.text }}>
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
                  <span>LinkedIn</span>
                </div>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          {resumeData.professionalSummary && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-1 border-b"
                style={{ color: selectedColors.secondary, borderColor: selectedColors.secondary }}
              >
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: selectedColors.text }}>
                {resumeData.professionalSummary}
              </p>
            </div>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-1 border-b"
                style={{ color: selectedColors.secondary, borderColor: selectedColors.secondary }}
              >
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {resumeData.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="text-sm py-1"
                    style={{ color: selectedColors.text }}
                  >
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-1 border-b"
                style={{ color: selectedColors.secondary, borderColor: selectedColors.secondary }}
              >
                WORK EXPERIENCE
              </h2>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold" style={{ color: selectedColors.text }}>
                        {exp.position}
                      </h3>
                      <span className="text-sm font-medium" style={{ color: selectedColors.text }}>
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm font-semibold mb-2" style={{ color: selectedColors.secondary }}>
                      {exp.company}
                    </p>
                    <div className="text-sm leading-relaxed" style={{ color: selectedColors.text }}>
                      {exp.description.split('\n').map((line, i) => (
                        <p key={i} className="mb-1">• {line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {resumeData.projects.length > 0 && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-1 border-b"
                style={{ color: selectedColors.secondary, borderColor: selectedColors.secondary }}
              >
                KEY PROJECTS
              </h2>
              <div className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold" style={{ color: selectedColors.text }}>
                        {project.title}
                      </h3>
                      <span className="text-sm font-medium" style={{ color: selectedColors.text }}>
                        {project.duration}
                      </span>
                    </div>
                    {project.technologies && (
                      <p className="text-sm font-semibold mb-2" style={{ color: selectedColors.secondary }}>
                        Technologies: {project.technologies}
                      </p>
                    )}
                    <div className="text-sm leading-relaxed" style={{ color: selectedColors.text }}>
                      {project.description.split('\n').map((line, i) => (
                        <p key={i} className="mb-1">• {line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {resumeData.languages.length > 0 && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-1 border-b"
                style={{ color: selectedColors.secondary, borderColor: selectedColors.secondary }}
              >
                LANGUAGES
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {resumeData.languages.map((language) => (
                  <div
                    key={language}
                    className="text-sm py-1"
                    style={{ color: selectedColors.text }}
                  >
                    • {language}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {resumeData.hobbies.length > 0 && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-1 border-b"
                style={{ color: selectedColors.secondary, borderColor: selectedColors.secondary }}
              >
                INTERESTS & HOBBIES
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {resumeData.hobbies.map((hobby) => (
                  <div
                    key={hobby}
                    className="text-sm py-1"
                    style={{ color: selectedColors.text }}
                  >
                    • {hobby}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Declaration */}
          {resumeData.declaration && (
            <div>
              <h2 
                className="text-lg font-bold mb-3 pb-1 border-b"
                style={{ color: selectedColors.secondary, borderColor: selectedColors.secondary }}
              >
                DECLARATION
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: selectedColors.text }}>
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