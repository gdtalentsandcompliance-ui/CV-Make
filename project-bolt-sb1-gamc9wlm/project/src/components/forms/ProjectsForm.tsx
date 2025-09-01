import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const ProjectsForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResume();

  const addProject = () => {
    const newProject = {
      title: '',
      description: '',
      technologies: '',
      duration: ''
    };
    updateResumeData('projects', [...resumeData.projects, newProject]);
  };

  const updateProject = (index: number, field: string, value: string) => {
    const updatedProjects = resumeData.projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    updateResumeData('projects', updatedProjects);
  };

  const removeProject = (index: number) => {
    updateResumeData('projects', resumeData.projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Projects</h3>
        <button
          onClick={addProject}
          className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Project</span>
        </button>
      </div>

      {resumeData.projects.map((project, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900">Project {index + 1}</h4>
            <button
              onClick={() => removeProject(index)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Title
              </label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => updateProject(index, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="E-commerce Platform"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                value={project.duration}
                onChange={(e) => updateProject(index, 'duration', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="3 months"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technologies Used
            </label>
            <input
              type="text"
              value={project.technologies}
              onChange={(e) => updateProject(index, 'technologies', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              rows={3}
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Describe your project, its impact, and your role..."
            />
          </div>
        </div>
      ))}

      {resumeData.projects.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No projects added yet. Click "Add Project" to get started.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;