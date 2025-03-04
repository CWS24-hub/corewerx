import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ZoomIn, ZoomOut, RotateCw, RotateCcw, Save, Check, Copy, Smartphone, Monitor, Eye, Menu, X } from 'lucide-react';

interface LogoAdjusterProps {
  onClose: () => void;
}

interface LogoPosition {
  x: number;
  y: number;
  scale: number;
  height: number;
  rotate: number;
}

const LogoAdjuster: React.FC<LogoAdjusterProps> = ({ onClose }) => {
  // Initialize with current CSS values
  const [desktopPosition, setDesktopPosition] = useState<LogoPosition>({
    x: 24,
    y: 21,
    scale: 1.1,
    height: 77,
    rotate: 0
  });
  
  const [mobilePosition, setMobilePosition] = useState<LogoPosition>({
    x: 0,
    y: 0,
    scale: 1.2,
    height: 60,
    rotate: 0
  });

  const [footerDesktopPosition, setFooterDesktopPosition] = useState<LogoPosition>({
    x: 24,
    y: 11,
    scale: 1.1,
    height: 77,
    rotate: 0
  });
  
  const [footerMobilePosition, setFooterMobilePosition] = useState<LogoPosition>({
    x: 0,
    y: 0,
    scale: 1.2,
    height: 60,
    rotate: 0
  });

  const [navbarHeight, setNavbarHeight] = useState(16);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [copied, setCopied] = useState(false);
  const [applyToNavbar, setApplyToNavbar] = useState(false);
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile' | 'both'>('desktop');
  const [activeSection, setActiveSection] = useState<'navbar' | 'footer'>('navbar');
  const [changesApplied, setChangesApplied] = useState(false);
  const [savedToCSS, setSavedToCSS] = useState(false);

  // Load saved values from localStorage on component mount
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('logoAdjusterSettings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        setDesktopPosition(settings.desktopPosition || desktopPosition);
        setMobilePosition(settings.mobilePosition || mobilePosition);
        setFooterDesktopPosition(settings.footerDesktopPosition || footerDesktopPosition);
        setFooterMobilePosition(settings.footerMobilePosition || footerMobilePosition);
        setNavbarHeight(settings.navbarHeight || navbarHeight);
        setNavbarColor(settings.navbarColor || navbarColor);
      }
    } catch (error) {
      console.error('Error loading saved settings:', error);
    }
  }, []);

  // Get the current position based on active device and section
  const getCurrentPosition = () => {
    if (activeSection === 'navbar') {
      return activeDevice === 'desktop' ? desktopPosition : mobilePosition;
    } else {
      return activeDevice === 'desktop' ? footerDesktopPosition : footerMobilePosition;
    }
  };

  const setCurrentPosition = (newPosition: LogoPosition) => {
    if (activeSection === 'navbar') {
      if (activeDevice === 'desktop') {
        setDesktopPosition(newPosition);
      } else {
        setMobilePosition(newPosition);
      }
    } else {
      if (activeDevice === 'desktop') {
        setFooterDesktopPosition(newPosition);
      } else {
        setFooterMobilePosition(newPosition);
      }
    }
  };

  const currentPosition = getCurrentPosition();

  const updatePosition = (key: string, value: number) => {
    setCurrentPosition({
      ...currentPosition,
      [key]: currentPosition[key] + value
    });
  };

  const setPositionValue = (key: string, value: number) => {
    setCurrentPosition({
      ...currentPosition,
      [key]: value
    });
  };

  const getCurrentStyles = (position: LogoPosition) => {
    return {
      height: `${position.height}px`,
      objectFit: 'contain' as const,
      maxWidth: '100%',
      transform: `translateX(${position.x}px) translateY(${position.y}px) scaleX(${position.scale}) rotate(${position.rotate}deg)`,
    };
  };

  const getMediaQueryCode = () => {
    if (activeSection === 'navbar') {
      return `
/* Navbar Styles */
.navbar {
  height: ${navbarHeight * 4}px;
  background-color: ${navbarColor};
}

/* Navbar Desktop Logo Styles */
.navbar-logo {
  height: ${desktopPosition.height}px;
  object-fit: contain;
  max-width: 100%;
  transform: translateX(${desktopPosition.x}px) translateY(${desktopPosition.y}px) scaleX(${desktopPosition.scale}) rotate(${desktopPosition.rotate}deg);
}

/* Navbar Mobile Logo Styles */
@media (max-width: 768px) {
  .navbar-logo {
    height: ${mobilePosition.height}px;
    transform: translateX(${mobilePosition.x}px) translateY(${mobilePosition.y}px) scaleX(${mobilePosition.scale}) rotate(${mobilePosition.rotate}deg);
  }
}`;
    } else {
      return `
/* Footer Desktop Logo Styles */
.footer-logo {
  height: ${footerDesktopPosition.height}px;
  object-fit: contain;
  max-width: 100%;
  transform: translateX(${footerDesktopPosition.x}px) translateY(${footerDesktopPosition.y}px) scaleX(${footerDesktopPosition.scale}) rotate(${footerDesktopPosition.rotate}deg);
}

/* Footer Mobile Logo Styles */
@media (max-width: 768px) {
  .footer-logo {
    height: ${footerMobilePosition.height}px;
    transform: translateX(${footerMobilePosition.x}px) translateY(${footerMobilePosition.y}px) scaleX(${footerMobilePosition.scale}) rotate(${footerMobilePosition.rotate}deg);
  }
}`;
    }
  };

  const getReactCode = () => {
    if (activeSection === 'navbar') {
      return `
// Navbar with responsive styles
<nav 
  className="fixed w-full z-50 transition-all duration-300"
  style={{
    height: '${navbarHeight * 4}px',
    backgroundColor: '${navbarColor}'
  }}
>
  <img 
    src="/images/noBgWhite.svg" 
    alt="CoreWerx Solutions Logo" 
    className="navbar-logo"
    style={{
      height: isMobile ? '${mobilePosition.height}px' : '${desktopPosition.height}px',
      objectFit: 'contain',
      maxWidth: '100%',
      transform: isMobile 
        ? 'translateX(${mobilePosition.x}px) translateY(${mobilePosition.y}px) scaleX(${mobilePosition.scale}) rotate(${mobilePosition.rotate}deg)'
        : 'translateX(${desktopPosition.x}px) translateY(${desktopPosition.y}px) scaleX(${desktopPosition.scale}) rotate(${desktopPosition.rotate}deg)',
    }}
  />
</nav>`;
    } else {
      return `
// Footer Logo with responsive styles
<img 
  src="/images/noBgWhite.svg" 
  alt="CoreWerx Solutions Logo" 
  className="footer-logo"
  style={{
    height: isMobile ? '${footerMobilePosition.height}px' : '${footerDesktopPosition.height}px',
    objectFit: 'contain',
    maxWidth: '100%',
    transform: isMobile 
      ? 'translateX(${footerMobilePosition.x}px) translateY(${footerMobilePosition.y}px) scaleX(${footerMobilePosition.scale}) rotate(${footerMobilePosition.rotate}deg)'
      : 'translateX(${footerDesktopPosition.x}px) translateY(${footerDesktopPosition.y}px) scaleX(${footerDesktopPosition.scale}) rotate(${footerDesktopPosition.rotate}deg)',
  }}
/>`;
    }
  };

  const copyToClipboard = (type: 'css' | 'react') => {
    const code = type === 'css' ? getMediaQueryCode() : getReactCode();
    
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert('Style code is in the console. Please copy manually.');
        console.log(code);
      });
  };

  // Function to apply CSS changes directly to the document
  const applyLiveChanges = () => {
    // Create or update the style element
    let styleElement = document.getElementById('logo-adjuster-styles');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'logo-adjuster-styles';
      document.head.appendChild(styleElement);
    }

    // Set the CSS content
    styleElement.textContent = getMediaQueryCode();
    
    // Show a notification
    setChangesApplied(true);
    setTimeout(() => setChangesApplied(false), 2000);
  };

  // Apply changes whenever positions change
  useEffect(() => {
    applyLiveChanges();
  }, [desktopPosition, mobilePosition, footerDesktopPosition, footerMobilePosition, navbarHeight, navbarColor]);

  // Function to permanently save changes to CSS file and localStorage
  const saveToCSS = () => {
    setApplyToNavbar(true);
    
    // Save all settings to localStorage for persistence
    const settings = {
      desktopPosition,
      mobilePosition,
      footerDesktopPosition,
      footerMobilePosition,
      navbarHeight,
      navbarColor
    };
    
    localStorage.setItem('logoAdjusterSettings', JSON.stringify(settings));
    
    // Create a permanent style element in the document
    let permanentStyleElement = document.getElementById('logo-permanent-styles');
    if (!permanentStyleElement) {
      permanentStyleElement = document.createElement('style');
      permanentStyleElement.id = 'logo-permanent-styles';
      document.head.appendChild(permanentStyleElement);
    }
    
    // Set the CSS content
    permanentStyleElement.textContent = `
/* Navbar Styles */
.navbar {
  height: ${navbarHeight * 4}px !important;
  background-color: ${navbarColor};
}

/* Navbar Desktop Logo Styles */
.navbar-logo {
  height: ${desktopPosition.height}px !important;
  object-fit: contain;
  max-width: 100%;
  transform: translateX(${desktopPosition.x}px) translateY(${desktopPosition.y}px) scaleX(${desktopPosition.scale}) rotate(${desktopPosition.rotate}deg) !important;
}

/* Navbar Mobile Logo Styles */
@media (max-width: 768px) {
  .navbar-logo {
    height: ${mobilePosition.height}px !important;
    transform: translateX(${mobilePosition.x}px) translateY(${mobilePosition.y}px) scaleX(${mobilePosition.scale}) rotate(${mobilePosition.rotate}deg) !important;
  }
}

/* Footer Desktop Logo Styles */
.footer-logo {
  height: ${footerDesktopPosition.height}px !important;
  object-fit: contain;
  max-width: 100%;
  transform: translateX(${footerDesktopPosition.x}px) translateY(${footerDesktopPosition.y}px) scaleX(${footerDesktopPosition.scale}) rotate(${footerDesktopPosition.rotate}deg) !important;
}

/* Footer Mobile Logo Styles */
@media (max-width: 768px) {
  .footer-logo {
    height: ${footerMobilePosition.height}px !important;
    transform: translateX(${footerMobilePosition.x}px) translateY(${footerMobilePosition.y}px) scaleX(${footerMobilePosition.scale}) rotate(${footerMobilePosition.rotate}deg) !important;
  }
}`;
    
    // Show success notification
    setSavedToCSS(true);
    
    // Update the actual CSS file (in a real implementation)
    // For now, we'll just simulate success
    setTimeout(() => {
      setApplyToNavbar(false);
      setSavedToCSS(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-dark-navy/90 z-50 flex flex-col items-center justify-start overflow-y-auto py-8">
      <div className="bg-navy p-6 rounded-lg shadow-lg max-w-5xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-bright-cyan">Logo Position Adjuster</h2>
          <button 
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4  py-2 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Live Changes Notification */}
        {changesApplied && (
          <div className="fixed top-4 right-4 bg-bright-cyan text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-out">
            <Check size={18} />
            <span>Changes applied live!</span>
          </div>
        )}
        
        {/* Saved to CSS Notification */}
        {savedToCSS && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-out">
            <Check size={18} />
            <span>Saved to CSS file!</span>
          </div>
        )}

        {/* Section Selector - Moved to the top and made more prominent */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2 w-full max-w-md">
            <button
              onClick={() => setActiveSection('navbar')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'navbar' 
                  ? 'bg-electric-blue text-white font-bold' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Menu size={18} />
              <span>Navbar Logo</span>
            </button>
            <button
              onClick={() => setActiveSection('footer')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'footer' 
                  ? 'bg-electric-blue text-white font-bold' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Menu size={18} />
              <span>Footer Logo</span>
            </button>
          </div>
        </div>

        {/* Device Selector */}
        <div className="flex justify-center mb-6 bg-navy/50 p-2 rounded-lg">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeDevice === 'desktop' 
                  ? 'bg-electric-blue text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Monitor size={18} />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeDevice === 'mobile' 
                  ? 'bg-electric-blue text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Smartphone size={18} />
              <span>Mobile</span>
            </button>
          </div>
        </div>

        {/* Preview Mode Selector */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setPreviewMode('desktop')}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm transition-colors ${
                previewMode === 'desktop' 
                  ? 'bg-bright-cyan/20 text-bright-cyan border border-bright-cyan/30' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Monitor size={14} />
              <span>Desktop Preview</span>
            </button>
            <button
              onClick={() => setPreviewMode('mobile')}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm transition-colors ${
                previewMode === 'mobile' 
                  ? 'bg-bright-cyan/20 text-bright-cyan border border-bright-cyan/30' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Smartphone size={14} />
              <span>Mobile Preview</span>
            </button>
            <button
              onClick={() => setPreviewMode('both')}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm transition-colors ${
                previewMode === 'both' 
                  ? 'bg-bright-cyan/20 text-bright-cyan border border-bright-cyan/30' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Eye size={14} />
              <span>Both</span>
            </button>
          </div>
        </div>

        {/* Realistic Preview */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-bright-cyan">
            {activeSection === 'navbar' ? 'Navbar Preview' : 'Footer Preview'}
          </h3>
          
          {/* Desktop Preview */}
          {(previewMode === 'desktop' || previewMode === 'both') && (
            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">Desktop View</p>
              <div className={`relative rounded-lg overflow-hidden transition-all duration-300 mb-2`} 
                style={{
                  height: activeSection === 'navbar' ? `${navbarHeight * 4}px` : '120px', 
                  backgroundColor: activeSection === 'navbar' ? (navbarColor === "transparent" ? "#060F1E" : navbarColor) : "#060F1E"
                }}>
                {/* Simulated background with gradient */}
                <div className={`absolute inset-0 ${activeSection === 'navbar' && navbarColor === "transparent" ? "bg-gradient-to-b from-dark-navy/95 to-transparent" : ""}`}></div>
                
                {/* Logo container */}
                <div className="relative h-full flex items-center px-4">
                  <img 
                    src="/images/noBgWhite.svg" 
                    alt="CoreWerx Solutions Logo" 
                    style={getCurrentStyles(activeSection === 'navbar' ? desktopPosition : footerDesktopPosition)}
                    className="transition-all duration-300"
                  />
                  
                  {/* Simulated menu items or footer content */}
                  {activeSection === 'navbar' ? (
                    <div className="ml-auto flex items-center space-x-4 opacity-50">
                      <div className="w-16 h-2 bg-gray-400 rounded"></div>
                      <div className="w-16 h-2 bg-gray-400 rounded"></div>
                      <div className="w-16 h-2 bg-gray-400 rounded"></div>
                      <div className="w-16 h-2 bg-gray-400 rounded"></div>
                    </div>
                  ) : (
                    <div className="ml-auto flex items-center space-x-4 opacity-50">
                      <div className="w-24 h-2 bg-gray-400 rounded"></div>
                      <div className="w-24 h-2 bg-gray-400 rounded"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Mobile Preview */}
          {(previewMode === 'mobile' || previewMode === 'both') && (
            <div>
              <p className="text-sm text-gray-400 mb-2">Mobile View</p>
              <div className={`relative rounded-lg overflow-hidden transition-all duration-300 mb-2 max-w-xs mx-auto`} 
                style={{
                  height: activeSection === 'navbar' ? `${navbarHeight * 4}px` : '120px', 
                  backgroundColor: activeSection === 'navbar' ? (navbarColor === "transparent" ? "#060F1E" : navbarColor) : "#060F1E"
                }}>
                {/* Simulated background with gradient */}
                <div className={`absolute inset-0 ${activeSection === 'navbar' && navbarColor === "transparent" ? "bg-gradient-to-b from-dark-navy/95 to-transparent" : ""}`}></div>
                
                {/* Logo container */}
                <div className="relative h-full flex items-center px-4">
                  <img 
                    src="/images/noBgWhite.svg" 
                    alt="CoreWerx Solutions Logo" 
                    style={getCurrentStyles(activeSection === 'navbar' ? mobilePosition : footerMobilePosition)}
                    className="transition-all duration-300"
                  />
                  
                  {/* Simulated mobile menu button or footer content */}
                  {activeSection === 'navbar' ? (
                    <div className="ml-auto">
                      <div className="w-8 h-8 flex flex-col justify-center space-y-1 opacity-50">
                        <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                        <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                        <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="ml-auto">
                      <div className="w-16 h-2 bg-gray-400 rounded opacity-50"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Navbar appearance controls - only show for navbar section */}
          {activeSection === 'navbar' && (
            <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
              <div>
                <h4 className="text-sm font-medium mb-1 text-gray-300">Navbar Height</h4>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="12" 
                    max="32" 
                    value={navbarHeight} 
                    onChange={(e) => setNavbarHeight(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="w-16 text-center">{navbarHeight * 4}px</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1 text-gray-300">Navbar Background</h4>
                <div className="flex items-center gap-2">
                  <select 
                    value={navbarColor}
                    onChange={(e) => setNavbarColor(e.target.value)}
                    className="bg-navy/30 border border-gray-600 rounded-lg px-3 py-1 text-white focus:outline-none focus:border-bright-cyan flex-1"
                  >
                    <option value="transparent">Transparent</option>
                    <option value="#060F1E">Dark Navy</option>
                    <option value="#0A192F">Navy</option>
                    <option value="#060F1E99">Semi-Transparent</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Full Page Preview - only show for navbar section */}
        {activeSection === 'navbar' && (
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-bright-cyan">Full Page Preview</h3>
            
            {/* Desktop Full Page Preview */}
            {(previewMode === 'desktop' || previewMode === 'both') && (
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Desktop View</p>
                <div className="relative rounded-lg overflow-hidden bg-dark-navy h-64 border border-gray-700">
                  {/* Simulated navbar */}
                  <div className={`w-full transition-all duration-300`} 
                      style={{height: `${navbarHeight * 4}px`, backgroundColor: navbarColor === "transparent" ? "#060F1E99" : navbarColor}}>
                    <div className={`absolute inset-x-0 top-0 ${navbarColor === "transparent" ? "bg-gradient-to-b from-dark-navy/95 to-transparent" : ""}`} 
                        style={{height: `${navbarHeight * 4}px`}}>
                      <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                        <img 
                          src="/images/noBgWhite.svg" 
                          alt="CoreWerx Solutions Logo" 
                          style={getCurrentStyles(desktopPosition)}
                          className="transition-all duration-300"
                        />
                        
                        {/* Simulated menu items */}
                        <div className="ml-auto flex items-center space-x-4 opacity-50">
                          <div className="w-16 h-2 bg-gray-400 rounded"></div>
                          <div className="w-16 h-2 bg-gray-400 rounded"></div>
                          <div className="w-16 h-2 bg-gray-400 rounded"></div>
                          <div className="w-16 h-2 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Simulated hero section */}
                  <div className="absolute inset-0 z-[-1]">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-navy/50 to-navy">
                      <div className="absolute inset-0 opacity-20">
                        <img 
                          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" 
                          alt="Background" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Simulated content */}
                  <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <div className="text-center">
                      <div className="w-64 h-4 bg-white/20 rounded mx-auto mb-3"></div>
                      <div className="w-96 h-8 bg-white/30 rounded mx-auto mb-6"></div>
                      <div className="flex justify-center gap-4">
                        <div className="w-32 h-10 bg-electric-blue rounded-lg"></div>
                        <div className="w-32 h-10 border-2 border-bright-cyan rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile Full Page Preview */}
            {(previewMode === 'mobile' || previewMode === 'both') && (
              <div>
                <p className="text-sm text-gray-400 mb-2">Mobile View</p>
                <div className="relative rounded-lg overflow-hidden bg-dark-navy h-64 border border-gray-700 max-w-xs mx-auto">
                  {/* Simulated navbar */}
                  <div className={`w-full transition-all duration-300`} 
                      style={{height: `${navbarHeight * 4}px`, backgroundColor: navbarColor === "transparent" ? "#060F1E99" : navbarColor}}>
                    <div className={`absolute inset-x-0 top-0 ${navbarColor === "transparent" ? "bg-gradient-to-b from-dark-navy/95 to-transparent" : ""}`} 
                        style={{height: `${navbarHeight * 4}px`}}>
                      <div className="px-4 h-full flex items-center">
                        <img 
                          src="/images/noBgWhite.svg" 
                          alt="CoreWerx Solutions Logo" 
                          style={getCurrentStyles(mobilePosition)}
                          className="transition-all duration-300"
                        />
                        
                        {/* Simulated mobile menu button */}
                        <div className="ml-auto">
                          <div className="w-8 h-8 flex flex-col justify-center space-y-1 opacity-50">
                            <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                            <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                            <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Simulated hero section */}
                  <div className="absolute inset-0 z-[-1]">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-navy/50 to-navy">
                      <div className="absolute inset-0 opacity-20">
                        <img 
                          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" 
                          alt="Background" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Simulated content */}
                  <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <div className="text-center px-4">
                      <div className="w-32 h-3 bg-white/20 rounded mx-auto mb-3"></div>
                      <div className="w-48 h-6 bg-white/30 rounded mx-auto mb-6"></div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="w-32 h-8 bg-electric-blue rounded-lg mx-auto"></div>
                        <div className="w-32 h-8 border-2 border-bright-cyan rounded-lg mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-bright-cyan">Horizontal Position</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updatePosition('x', -10)}
                  className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
                >
                  <ArrowLeft size={20} />
                </button>
                <input 
                  type="range" 
                  min="-100" 
                  max="100" 
                  value={currentPosition.x} 
                  onChange={(e) => setPositionValue('x', parseInt(e.target.value))}
                  className="flex-1"
                />
                <button 
                  onClick={() => updatePosition('x', 10)}
                  className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
                >
                  <ArrowRight size={20} />
                </button>
                <span className="w-12 text-center">{currentPosition.x}px</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-bright-cyan">Vertical Position</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updatePosition('y', -10)}
                  className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
                >
                  <ArrowUp size={20} />
                </button>
                <input 
                  type="range" 
                  min="-100" 
                  max="100" 
                  value={currentPosition.y} 
                  onChange={(e) => setPositionValue('y', parseInt(e.target.value))}
                  className="flex-1"
                />
                <button 
                  onClick={() => updatePosition('y', 10)}
                  className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
                >
                  <ArrowDown size={20} />
                </button>
                <span className="w-12 text-center">{currentPosition.y}px</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-bright-cyan">Horizontal Scale</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updatePosition('scale', -0.1)}
                  className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
                >
                  <ZoomOut size={20} />
                </button>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2.5" 
                  step="0.1"
                  value={currentPosition.scale} 
                  onChange={(e) => setPositionValue('scale', parseFloat(e.target.value))}
                  className="flex-1"
                />
                <button 
                  onClick={() => updatePosition('scale', 0.1)}
                  className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
                >
                  <ZoomIn size={20} />
                </button>
                <span className="w-12 text-center">{currentPosition.scale.toFixed(1)}x</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 text-bright-cyan">Height</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updatePosition('height', -10)}
                  className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
                >
                  <ZoomOut size={20} />
                </button>
                <input 
                  type="range" 
                  min="20" 
                  max="200" 
                  value={currentPosition.height} 
                  onChange={(e) => setPositionValue('height', parseInt(e.target.value))}
                  className="flex-1"
                />
                <button 
                  onClick={() => updatePosition('height', 10)}
                  className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
                >
                  <ZoomIn size={20} />
                </button>
                <span className="w-16 text-center">{currentPosition.height}px</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-bright-cyan">Rotation</h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => updatePosition('rotate', -5)}
              className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
            >
              <RotateCcw size={20} />
            </button>
            <input 
              type="range" 
              min="-180" 
              max="180" 
              value={currentPosition.rotate} 
              onChange={(e) => setPositionValue('rotate', parseInt(e.target.value))}
              className="flex-1"
            />
            <button 
              onClick={() => updatePosition('rotate', 5)}
              className="bg-electric-blue hover:bg-bright-cyan text-white p-2 rounded"
            >
              <RotateCw size={20} />
            </button>
            <span className="w-12 text-center">{currentPosition.rotate}°</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* CSS Code */}
          <div className="bg-gray-800 p-4 rounded-lg overflow-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-300">CSS with Media Queries</h3>
              <button 
                onClick={() => copyToClipboard('css')}
                className="bg-gray-700 hover:bg-gray-600 text-white px-3  py-1 rounded-md flex items-center gap-1 text-sm"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-gray-200 text-sm whitespace-pre-wrap">
              {getMediaQueryCode()}
            </pre>
          </div>

          {/* React Code */}
          <div className="bg-gray-800 p-4 rounded-lg overflow-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-300">React Component Code</h3>
              <button 
                onClick={() => copyToClipboard('react')}
                className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md flex items-center gap-1 text-sm"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-gray-200 text-sm whitespace-pre-wrap">
              {getReactCode()}
            </pre>
          </div>
        </div>

        <div className="flex justify-between">
          <button 
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
          >
            Cancel
          </button>
          <button 
            onClick={saveToCSS}
            className="bg-bright-cyan hover:bg-electric-blue text-white px-6 py-3 rounded-lg flex items-center gap-2"
            disabled={applyToNavbar}
          >
            {applyToNavbar ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Saving...
              </>
            ) : (
              <>
                <Save size={20} />
                Save to CSS File
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoAdjuster;