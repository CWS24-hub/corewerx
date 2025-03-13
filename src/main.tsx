import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './i18n';
import './index.css';
import { initEmailService } from './utils/emailService';

// Initialize email service
initEmailService();

// Apply logo settings from localStorage on page load
const applyLogoSettings = () => {
  try {
    const savedSettings = localStorage.getItem('logoAdjusterSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      
      // Create a style element for the settings
      let styleElement = document.getElementById('logo-permanent-styles');
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'logo-permanent-styles';
        document.head.appendChild(styleElement);
      }
      
      // Apply the CSS with !important to override default styles
      styleElement.textContent = `
/* Navbar Styles */
.navbar {
  height: ${settings.navbarHeight * 4}px !important;
  background-color: ${settings.navbarColor};
}

/* Navbar Desktop Logo Styles */
.navbar-logo {
  height: ${settings.desktopPosition.height}px !important;
  object-fit: contain;
  max-width: 100%;
  transform: translateX(${settings.desktopPosition.x}px) translateY(${settings.desktopPosition.y}px) scaleX(${settings.desktopPosition.scale}) rotate(${settings.desktopPosition.rotate}deg) !important;
}

/* Navbar Mobile Logo Styles */
@media (max-width: 768px) {
  .navbar-logo {
    height: ${settings.mobilePosition.height}px !important;
    transform: translateX(${settings.mobilePosition.x}px) translateY(${settings.mobilePosition.y}px) scaleX(${settings.mobilePosition.scale}) rotate(${settings.mobilePosition.rotate}deg) !important;
  }
}

/* Footer Desktop Logo Styles */
.footer-logo {
  height: ${settings.footerDesktopPosition.height}px !important;
  object-fit: contain;
  max-width: 100%;
  transform: translateX(${settings.footerDesktopPosition.x}px) translateY(${settings.footerDesktopPosition.y}px) scaleX(${settings.footerDesktopPosition.scale}) rotate(${settings.footerDesktopPosition.rotate}deg) !important;
}

/* Footer Mobile Logo Styles */
@media (max-width: 768px) {
  .footer-logo {
    height: ${settings.footerMobilePosition.height}px !important;
    transform: translateX(${settings.footerMobilePosition.x}px) translateY(${settings.footerMobilePosition.y}px) scaleX(${settings.footerMobilePosition.scale}) rotate(${settings.footerMobilePosition.rotate}deg) !important;
  }
}`;
    }
  } catch (error) {
    console.error('Error applying logo settings:', error);
  }
};

// Apply settings before rendering
applyLogoSettings();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);