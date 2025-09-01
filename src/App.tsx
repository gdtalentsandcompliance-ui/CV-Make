@@ .. @@
 import Header from './components/Header';
 import LandingPage from './components/LandingPage';
 import AuthModal from './components/AuthModal';
 import ResumeBuilder from './components/ResumeBuilder';
 import TemplateGallery from './components/TemplateGallery';
-import Dashboard from './components/Dashboard';
 import { AuthProvider, useAuth } from './context/AuthContext';
 import { ResumeProvider } from './context/ResumeContext';

@@ .. @@
         <Route path="/builder" element={
           user ? <ResumeBuilder /> : <Navigate to="/" replace />
         } />
-        <Route path="/dashboard" element={
-          user ? <Dashboard /> : <Navigate to="/" replace />
-        } />
       </Routes>