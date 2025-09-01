import React, { useState } from 'react';
import { X, CreditCard } from 'lucide-react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useAuth } from '../context/AuthContext';

interface Template {
  id: string;
  name: string;
  price: number;
  priceUSD: number;
  preview: string;
}

interface PaymentModalProps {
  template: Template;
  currency: 'INR' | 'USD';
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ template, currency, onClose, onSuccess }) => {
  const { addPremiumTemplate } = useAuth();
  const [processing, setProcessing] = useState(false);

  const price = currency === 'INR' ? template.price : template.priceUSD;
  const currencySymbol = currency === 'INR' ? '₹' : '$';

  const handlePayPalSuccess = async (details: any) => {
    setProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    addPremiumTemplate(template.id);
    setProcessing(false);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <CreditCard className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Purchase Template</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{template.preview}</p>
            <div className="text-2xl font-bold text-blue-600">
              {currencySymbol}{price}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">What's included:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Professional template design</li>
              <li>• ATS-friendly formatting</li>
              <li>• Customizable fonts and colors</li>
              <li>• Lifetime access</li>
              <li>• Priority support</li>
            </ul>
          </div>

          {processing ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Processing payment...</p>
            </div>
          ) : (
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: (currency === 'USD' ? template.priceUSD : template.price / 80).toString(),
                      currency_code: currency === 'USD' ? 'USD' : 'USD' // PayPal sandbox uses USD
                    },
                    description: `${template.name} Resume Template`
                  }]
                });
              }}
              onApprove={async (data, actions) => {
                if (actions.order) {
                  const details = await actions.order.capture();
                  await handlePayPalSuccess(details);
                }
              }}
              onError={(err) => {
                console.error('PayPal error:', err);
                alert('Payment failed. Please try again.');
              }}
            />
          )}
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          Secure payment powered by PayPal. No card details stored.
        </p>
      </div>
    </div>
  );
};

export default PaymentModal;