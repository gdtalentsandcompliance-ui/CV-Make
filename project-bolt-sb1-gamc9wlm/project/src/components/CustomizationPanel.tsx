import React from 'react';
import { X, Palette, Type } from 'lucide-react';
import { useResume } from '../context/ResumeContext';

interface CustomizationPanelProps {
  onClose: () => void;
}

const fonts = [
  'Inter',
  'Calibri',
  'Times New Roman',
  'Arial',
  'Georgia',
  'Helvetica'
];

const colorSchemes = [
  { name: 'Professional Blue', primary: '#2563EB', secondary: '#4F46E5', text: '#1F2937' },
  { name: 'Corporate Gray', primary: '#374151', secondary: '#6B7280', text: '#111827' },
  { name: 'Modern Teal', primary: '#0D9488', secondary: '#14B8A6', text: '#1F2937' },
  { name: 'Creative Purple', primary: '#7C3AED', secondary: '#8B5CF6', text: '#1F2937' },
  { name: 'Executive Black', primary: '#1F2937', secondary: '#374151', text: '#111827' },
  { name: 'Fresh Green', primary: '#059669', secondary: '#10B981', text: '#1F2937' },
];

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ onClose }) => {
  const { selectedFont, setSelectedFont, selectedColors, setSelectedColors } = useResume();

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Palette className="h-5 w-5 mr-2" />
          Customize Your Resume
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Font Selection */}
        <div>
          <h4 className="font-medium text-gray-900 mb-4 flex items-center">
            <Type className="h-4 w-4 mr-2" />
            Font Family
          </h4>
          <div className="space-y-2">
            {fonts.map((font) => (
              <button
                key={font}
                onClick={() => setSelectedFont(font)}
                className={`w-full text-left px-4 py-3 border rounded-lg transition-colors ${
                  selectedFont === font
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                style={{ fontFamily: font }}
              >
                <span className="font-medium">{font}</span>
                <span className="text-sm text-gray-500 block">The quick brown fox jumps</span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Schemes */}
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Color Scheme</h4>
          <div className="space-y-3">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.name}
                onClick={() => setSelectedColors({
                  primary: scheme.primary,
                  secondary: scheme.secondary,
                  text: scheme.text
                })}
                className={`w-full text-left p-3 border rounded-lg transition-colors ${
                  selectedColors.primary === scheme.primary
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: scheme.primary }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: scheme.secondary }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: scheme.text }}
                    ></div>
                  </div>
                  <span className="font-medium text-gray-900">{scheme.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationPanel;