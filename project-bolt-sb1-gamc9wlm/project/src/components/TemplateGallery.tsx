import React, { useState } from 'react';
import { Crown, Check, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useResume } from '../context/ResumeContext';
import PaymentModal from './PaymentModal';

const templates = [
  // Free templates
  { id: 'template-1', name: 'Modern Professional', price: 0, currency: 'free', preview: 'Clean and modern design with subtle accents' },
  { id: 'template-2', name: 'Classic Executive', price: 0, currency: 'free', preview: 'Traditional layout perfect for corporate roles' },
  { id: 'template-3', name: 'Creative Designer', price: 0, currency: 'free', preview: 'Creative layout with unique visual elements' },
  
  // Premium templates (sample)
  { id: 'template-4', name: 'Tech Innovator', price: 99, currency: 'INR', priceUSD: 5, preview: 'Perfect for tech professionals and startups' },
  { id: 'template-5', name: 'Marketing Pro', price: 149, currency: 'INR', priceUSD: 8, preview: 'Designed for marketing and sales professionals' },
  { id: 'template-6', name: 'Finance Expert', price: 199, currency: 'INR', priceUSD: 12, preview: 'Professional layout for finance professionals' },
  { id: 'template-7', name: 'Healthcare Professional', price: 179, currency: 'INR', priceUSD: 10, preview: 'Clean design for healthcare workers' },
  { id: 'template-8', name: 'Academic Scholar', price: 159, currency: 'INR', priceUSD: 9, preview: 'Academic-focused layout with publications section' },
  { id: 'template-9', name: 'Startup Founder', price: 199, currency: 'INR', priceUSD: 15, preview: 'Dynamic design for entrepreneurs' },
  { id: 'template-10', name: 'Senior Executive', price: 249, currency: 'INR', priceUSD: 20, preview: 'Premium executive template with sophisticated design' },
];

// Generate more templates to reach 50
for (let i = 11; i <= 50; i++) {
  templates.push({
    id: `template-${i}`,
    name: `Professional Template ${i}`,
    price: 99 + Math.floor(Math.random() * 100),
    currency: 'INR',
    priceUSD: 5 + Math.floor(Math.random() * 20),
    preview: `ATS-friendly professional template design ${i}`
  });
}

const TemplateGallery: React.FC = () => {
  const { user } = useAuth();
  const { selectedTemplate, setSelectedTemplate } = useResume();
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD'>('USD');
  const [paymentTemplate, setPaymentTemplate] = useState<string | null>(null);

  const isTemplateOwned = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    return template?.price === 0 || user?.premiumTemplates.includes(templateId);
  };

  const handleTemplateSelect = (templateId: string) => {
    if (isTemplateOwned(templateId)) {
      setSelectedTemplate(templateId);
    } else {
      setPaymentTemplate(templateId);
    }
  };

  const freeTemplates = templates.filter(t => t.price === 0);
  const premiumTemplates = templates.filter(t => t.price > 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Resume Templates</h1>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Currency:</label>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value as 'INR' | 'USD')}
                className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD ($)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>
          </div>
          <p className="text-gray-600">
            Choose from our collection of 50 professional, ATS-friendly templates
          </p>
        </div>

        {/* Free Templates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
              FREE
            </span>
            Free Templates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeTemplates.map((template) => (
              <div
                key={template.id}
                className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                  selectedTemplate === template.id 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleTemplateSelect(template.id)}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-20 h-24 bg-white rounded shadow-sm mx-auto mb-2"></div>
                    <p className="text-xs text-gray-500">Template Preview</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    {selectedTemplate === template.id && (
                      <Check className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{template.preview}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">FREE</span>
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Templates */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Crown className="h-6 w-6 text-yellow-500 mr-2" />
            Premium Templates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumTemplates.map((template) => {
              const isOwned = isTemplateOwned(template.id);
              const price = selectedCurrency === 'INR' ? `₹${template.price}` : `$${template.priceUSD}`;
              
              return (
                <div
                  key={template.id}
                  className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                    selectedTemplate === template.id 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-yellow-50 to-orange-50 rounded-t-lg flex items-center justify-center relative">
                    {!isOwned && (
                      <div className="absolute top-2 right-2">
                        <Lock className="h-5 w-5 text-yellow-600" />
                      </div>
                    )}
                    <div className="text-center p-4">
                      <div className="w-20 h-24 bg-white rounded shadow-sm mx-auto mb-2"></div>
                      <p className="text-xs text-gray-500">Premium Template</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      {selectedTemplate === template.id && isOwned && (
                        <Check className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{template.preview}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-600 font-semibold">{price}</span>
                      <button 
                        className={`px-3 py-1 text-sm rounded transition-colors ${
                          isOwned 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-orange-600 text-white hover:bg-orange-700'
                        }`}
                      >
                        {isOwned ? 'Select' : 'Buy Now'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {paymentTemplate && (
          <PaymentModal
            template={templates.find(t => t.id === paymentTemplate)!}
            currency={selectedCurrency}
            onClose={() => setPaymentTemplate(null)}
            onSuccess={() => {
              setPaymentTemplate(null);
              setSelectedTemplate(paymentTemplate);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TemplateGallery;