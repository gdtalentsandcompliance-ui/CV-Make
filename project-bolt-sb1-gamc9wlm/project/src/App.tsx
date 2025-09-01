import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import ResumeBuilder from './components/ResumeBuilder';
import TemplateGallery from './components/TemplateGallery';
import Dashboard from './components/Dashboard';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ResumeProvider } from './context/ResumeContext';

const paypalOptions = {
  "client-id": "AQ9LjJZpP_0zED0S3hDetb5fB4dHXTrj_vB5LlyNBObvIjAogs8HHsBG_By4GIvRG0SXMAerdN0CAAJE",
  currency: "USD",
  intent: "capture",
};

function AppContent() {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAuthClick={() => setShowAuthModal(true)} />
      
      <Routes>
        <Route path="/" element={<LandingPage onGetStarted={() => setShowAuthModal(true)} />} />
        <Route path="/templates" element={
          user ? <TemplateGallery /> : <Navigate to="/" replace />
        } />
        <Route path="/builder" element={
          user ? <ResumeBuilder /> : <Navigate to="/" replace />
        } />
        <Route path="/dashboard" element={
          user ? <Dashboard /> : <Navigate to="/" replace />
        } />
      </Routes>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <AuthProvider>
        <ResumeProvider>
          <Router>
            <AppContent />
          </Router>
        </ResumeProvider>
      </AuthProvider>
    </PayPalScriptProvider>
  );
}

export default App;