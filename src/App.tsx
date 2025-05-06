import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { Lock } from 'lucide-react';

// Service Sections
import CloudSection from './sections/ServiceSections/CloudSection';
import CyberSecuritySection from './sections/ServiceSections/CyberSecuritySection';
import TechnologySection from './sections/ServiceSections/TechnologySection';
import NetworkingSection from './sections/ServiceSections/NetworkingSection';
import CRMSection from './sections/ServiceSections/CRMSection';
import WorkplaceSection from './sections/ServiceSections/WorkplaceSection';
import ContinuitySection from './sections/ServiceSections/ContinuitySection';

// Landing Pages
import CloudSolutions from './pages/LandingPages/CloudSolutions';
import CyberSecurity from './pages/LandingPages/CyberSecurity';
import ManagedIT from './pages/LandingPages/ManagedIT';
import EmailLicensing from './pages/LandingPages/EmailLicensing';
import BusinessContinuity from './pages/LandingPages/BusinessContinuity';

// Tools Pages
import M365Onboarding from './pages/Tools/M365Onboarding';

// SEO Component
const SEO = ({ location }: { location: { pathname: string } }) => {
  useEffect(() => {
    // Update meta tags based on current route
    const path = location.pathname;
    let title = "CoreWerx Solutions - Enterprise IT & Cloud Services in UAE";
    let description = "Transform your business with enterprise-grade IT solutions. Specializing in cloud services, cybersecurity, managed IT, and business continuity solutions in Dubai, UAE.";

    switch (path) {
      case '/landing/cloud':
        title = "Cloud Solutions & Microsoft 365 Services | CoreWerx Solutions";
        description = "Enterprise cloud solutions including Microsoft 365, Azure, and cloud migration services. Transform your business with our expert cloud services in Dubai, UAE.";
        break;
      case '/landing/security':
        title = "Enterprise Cybersecurity Solutions | CoreWerx Solutions";
        description = "Comprehensive cybersecurity solutions including threat detection, SOC services, and security training. Protect your business with enterprise-grade security.";
        break;
      case '/tools/m365-onboarding':
        title = "Microsoft 365 Onboarding Tool | CoreWerx Solutions";
        description = "Streamline your Microsoft 365 account setup process with our internal IT onboarding tool. Simplify user creation and MFA setup.";
        break;
      // Add cases for other routes
    }

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [location]);

  return null;
};

function App() {
  const [showLogoAdjuster, setShowLogoAdjuster] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isResetPasswordPage, setIsResetPasswordPage] = useState(false);
  const location = useLocation();

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
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <SEO location={location} />
      <Navbar />
      
      <Routes>
        {/* Landing Pages */}
        <Route path="/landing/cloud" element={<CloudSolutions />} />
        <Route path="/landing/security" element={<CyberSecurity />} />
        <Route path="/landing/managed-it" element={<ManagedIT />} />
        <Route path="/landing/email-licensing" element={<EmailLicensing />} />
        <Route path="/landing/continuity" element={<BusinessContinuity />} />
        
        {/* Tools Pages */}
        <Route path="/tools/m365-onboarding" element={<M365Onboarding />} />
        
        {/* Main Website */}
        <Route path="/" element={
          <main>
            <Element name="home">
              <Hero />
            </Element>

            <Element name="about">
              <AboutSection />
            </Element>

            <Element name="cyber-security">
              <CyberSecuritySection />
            </Element>

            <Element name="technology">
              <TechnologySection />
            </Element>

            <Element name="cloud">
              <CloudSection />
            </Element>

            <Element name="continuity">
              <ContinuitySection />
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
          </main>
        } />
      </Routes>

      <Chatbot />
      <Footer />
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
  );

  function handleAdminLogin() {
    setIsAdmin(true);
  }

  function handleAdminLogout() {
    setIsAdmin(false);
  }
}

export default App;