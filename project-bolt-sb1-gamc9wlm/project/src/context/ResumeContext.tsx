import React, { createContext, useContext, useState } from 'react';

export interface ResumeData {
  personalDetails: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedinUrl: string;
  };
  professionalSummary: string;
  skills: string[];
  projects: Array<{
    title: string;
    description: string;
    technologies: string;
    duration: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  languages: string[];
  hobbies: string[];
  declaration: string;
}

interface ResumeContextType {
  resumeData: ResumeData;
  updateResumeData: (section: keyof ResumeData, data: any) => void;
  selectedTemplate: string;
  setSelectedTemplate: (templateId: string) => void;
  selectedFont: string;
  setSelectedFont: (font: string) => void;
  selectedColors: {
    primary: string;
    secondary: string;
    text: string;
  };
  setSelectedColors: (colors: { primary: string; secondary: string; text: string }) => void;
}

const defaultResumeData: ResumeData = {
  personalDetails: {
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedinUrl: ''
  },
  professionalSummary: '',
  skills: [],
  projects: [],
  experience: [],
  languages: [],
  hobbies: [],
  declaration: 'I hereby declare that all the information provided above is true and accurate to the best of my knowledge.'
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState('template-1');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [selectedColors, setSelectedColors] = useState({
    primary: '#2563EB',
    secondary: '#4F46E5',
    text: '#1F2937'
  });

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  return (
    <ResumeContext.Provider value={{
      resumeData,
      updateResumeData,
      selectedTemplate,
      setSelectedTemplate,
      selectedFont,
      setSelectedFont,
      selectedColors,
      setSelectedColors
    }}>
      {children}
    </ResumeContext.Provider>
  );
};