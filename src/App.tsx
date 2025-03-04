import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Hero from './sections/Hero';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import LogoAdjuster from './components/LogoAdjuster';
import ShareLink from './components/ShareLink';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import PasswordResetPage from './components/PasswordResetPage';
import { Settings, Lock } from 'lucide-react';

// Service Sections
import CloudSection from './sections/ServiceSections/CloudSection';
import CyberSecuritySection from './sections/ServiceSections/CyberSecuritySection';
import TechnologySection from './sections/ServiceSections/TechnologySection';
import NetworkingSection from './sections/ServiceSections/NetworkingSection';
import CRMSection from './sections/ServiceSections/CRMSection';
import WorkplaceSection from './sections/ServiceSections/WorkplaceSection';

// Landing Pages
import CloudSolutions from './pages/LandingPages/CloudSolutions';
import CyberSecurity from './pages/LandingPages/CyberSecurity';
import ManagedIT from './pages/LandingPages/ManagedIT';

function App() {
  const [showLogoAdjuster, setShowLogoAdjuster] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isResetPasswordPage, setIsResetPasswordPage] = useState(false);

  // Check if user is admin
  useEffect(() => {
    // Check for admin access in localStorage or URL parameter
    const checkAdminAccess = () => {
      // Check URL parameters first (for initial access)
      const urlParams = new URLSearchParams(window.location.search);
      const accessKey = urlParams.get('access');
      
      // Check localStorage (for persistent access)
      const storedAccessKey = localStorage.getItem('corewerx_admin_access');
      
      // Validate access key - in a real app, this would be more secure
      const validAccessKey = 'design2025';
      
      if (accessKey === validAccessKey || storedAccessKey === validAccessKey) {
        // Store the access key in localStorage for persistence
        localStorage.setItem('corewerx_admin_access', validAccessKey);
        setIsAdmin(true);
        
        // Clean URL if access was granted via URL parameter
        if (accessKey === validAccessKey && window.history.replaceState) {
          const newUrl = window.location.pathname + window.location.hash;
          window.history.replaceState({}, document.title, newUrl);
        }
      }
    };
    
    checkAdminAccess();
    
    // Check if this is a password reset page
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const email = urlParams.get('email');
    
    if (token && email) {
      setIsResetPasswordPage(true);
    }
  }, []);

  // Render password reset page if token and email are in URL
  if (isResetPasswordPage) {
    return <PasswordResetPage />;
  }

  return (
    <Router>
      <Routes>
        {/* Landing Pages */}
        <Route path="/landing/cloud" element={<CloudSolutions />} />
        <Route path="/landing/security" element={<CyberSecurity />} />
        <Route path="/landing/managed-it" element={<ManagedIT />} />
        
        {/* Main Website */}
        <Route path="/" element={
          <div className="min-h-screen bg-blue-50 text-gray-800">
            <Navbar />
            
            <Element name="home">
              <Hero />
            </Element>

            {/* About Us section moved to appear right after Hero */}
            <Element name="about">
              <AboutSection />
            </Element>

            {/* Service Sections */}
            <Element name="cyber-security">
              <CyberSecuritySection />
            </Element>

            <Element name="technology">
              <TechnologySection />
            </Element>

            <Element name="cloud">
              <CloudSection />
            </Element>

            <Element name="networking">
              <NetworkingSection />
            </Element>

            <Element name="workplace">
              <WorkplaceSection />
            </Element>

            <Element name="crm">
              <CRMSection />
            </Element>

            <Element name="contact">
              <ContactSection />
            </Element>

            <Chatbot />
            <Footer />

            {/* Share Link Component */}
            <ShareLink />

            {/* Admin Login Button - Only visible to non-admins */}
            {!isAdmin && (
              <button 
                onClick={() => setShowAdminLogin(true)}
                className="fixed bottom-20 right-4 z-40 bg-gray-500 hover:bg-gray-600 text-white rounded-full p-3 shadow-lg opacity-30 hover:opacity-100 transition-opacity"
                title="Admin Login"
              >
                <Lock size={20} />
              </button>
            )}

            {/* Admin Panel - Only visible to admins */}
            {isAdmin && (
              <AdminPanel onLogout={handleAdminLogout} />
            )}

            {/* Admin Login Modal */}
            <AdminLogin 
              isOpen={showAdminLogin}
              onClose={() => setShowAdminLogin(false)}
              onLogin={handleAdminLogin}
            />

            {/* Logo Adjuster Modal */}
            {showLogoAdjuster && (
              <LogoAdjuster onClose={() => setShowLogoAdjuster(false)} />
            )}
          </div>
        } />
      </Routes>
    </Router>
  );

  function handleAdminLogin() {
    setIsAdmin(true);
  }

  function handleAdminLogout() {
    setIsAdmin(false);
  }
}

export default App;