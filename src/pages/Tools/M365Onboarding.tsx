import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { 
  User, Mail, Key, ArrowRight, ArrowLeft, Shield, 
  Smartphone, Check, AlertTriangle, RefreshCw, Info,
  Share2, Copy, Download, Phone, Lock, Globe
} from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const M365Onboarding: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [showMfaGuide, setShowMfaGuide] = useState(false);
  const [errors, setErrors] = useState<Partial<UserDetails>>({});
  const [copied, setCopied] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const accountSetupRef = useRef<HTMLDivElement>(null);
  const mfaSetupRef = useRef<HTMLDivElement>(null);

  const validateForm = () => {
    const newErrors: Partial<UserDetails> = {};
    
    if (!userDetails.firstName) newErrors.firstName = 'First name is required';
    if (!userDetails.lastName) newErrors.lastName = 'Last name is required';
    if (!userDetails.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!userDetails.password) {
      newErrors.password = 'Password is required';
    } else if (userDetails.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setUserDetails({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
    setErrors({});
    setShowResults(false);
    setShowMfaGuide(false);
  };

  const handleShare = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);

    try {
      // Create a temporary container for both guides
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.left = '-9999px';
      tempContainer.style.backgroundColor = '#ffffff';
      tempContainer.style.padding = '20px';
      document.body.appendChild(tempContainer);

      // Clone and append account setup guide
      if (accountSetupRef.current) {
        const accountClone = accountSetupRef.current.cloneNode(true) as HTMLElement;
        accountClone.style.marginBottom = '20px';
        tempContainer.appendChild(accountClone);
      }

      // Clone and append MFA setup guide
      if (mfaSetupRef.current) {
        const mfaClone = mfaSetupRef.current.cloneNode(true) as HTMLElement;
        tempContainer.appendChild(mfaClone);
      }

      // Wait for images to load
      await new Promise((resolve) => {
        const images = tempContainer.getElementsByTagName('img');
        let loadedImages = 0;
        const totalImages = images.length;

        const checkAllImagesLoaded = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            resolve(true);
          }
        };

        Array.from(images).forEach((img) => {
          if (img.complete) {
            checkAllImagesLoaded();
          } else {
            img.onload = checkAllImagesLoaded;
            img.onerror = checkAllImagesLoaded;
          }
        });

        // Fallback if no images or they fail to load
        setTimeout(resolve, 2000);
      });

      // Generate PDF
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        imageTimeout: 5000,
        onclone: (_, element) => {
          element.style.width = '800px';
        }
      });

      // Create PDF with proper dimensions
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const aspectRatio = canvas.height / canvas.width;
      const imgWidth = pdfWidth;
      const imgHeight = pdfWidth * aspectRatio;

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      // Clean up temporary container
      document.body.removeChild(tempContainer);

      // Generate email content
      const pdfBlob = pdf.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const emailSubject = `Microsoft 365 Account Setup Guide - ${userDetails.firstName} ${userDetails.lastName}`;
      const emailBody = `Dear ${userDetails.firstName},\n\nHere is your Microsoft 365 account setup guide. Please follow these steps to complete your account setup:\n\n1. Access the Microsoft 365 portal using your email: ${userDetails.email}\n2. Use your initial password to sign in (sent separately for security)\n3. Follow the MFA setup instructions in the attached PDF\n\nIf you need any assistance, please contact the IT support team.\n\nBest regards,\nIT Support Team`;

      // Download PDF
      const downloadLink = document.createElement('a');
      downloadLink.href = pdfUrl;
      downloadLink.download = `M365_Setup_Guide_${userDetails.firstName}_${userDetails.lastName}.pdf`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Open email client
      const mailtoLink = `mailto:${userDetails.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink, '_blank');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF: ' + error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const AccountSetupGuide = () => (
    <div ref={accountSetupRef} className="space-y-6 bg-white p-8 rounded-lg">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Account Details</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-medium mb-1">Name:</p>
            <p>{userDetails.firstName} {userDetails.lastName}</p>
          </div>
          <div>
            <p className="font-medium mb-1">Email:</p>
            <p>{userDetails.email}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="font-medium text-gray-700 mb-1">Initial Password:</p>
          <div className="flex items-center gap-2">
            <code className="bg-gray-100 px-3 py-1.5 rounded text-gray-800 font-mono">
              {userDetails.password}
            </code>
            <button
              onClick={() => {
                navigator.clipboard.writeText(userDetails.password);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-gray-500 hover:text-gray-700"
              title="Copy password"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Please change this password upon first login
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Microsoft 365 Portal Access</h3>
        <div className="flex items-center justify-center mb-6">
          <QRCodeSVG 
            value="https://portal.office.com" 
            size={150}
            level="H"
            includeMargin={true}
            className="bg-white p-2 rounded"
          />
        </div>
        <p className="text-gray-600 text-center">
          Scan this QR code to access the Microsoft 365 portal
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Next Steps</h3>
        <ol className="space-y-4">
          <li className="flex items-start gap-3 text-gray-700">
            <div className="bg-blue-100 rounded-full p-1 mt-1">
              <Globe className="w-4 h-4 text-blue-600" />
            </div>
            <span>Visit portal.office.com and sign in with your email and password</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <div className="bg-blue-100 rounded-full p-1 mt-1">
              <Phone className="w-4 h-4 text-blue-600" />
            </div>
            <span>Download Microsoft Authenticator app on your mobile device</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <div className="bg-blue-100 rounded-full p-1 mt-1">
              <Lock className="w-4 h-4 text-blue-600" />
            </div>
            <span>Set up Multi-Factor Authentication (MFA) for enhanced security</span>
          </li>
        </ol>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          Start Over
        </button>
        <div className="flex gap-2">
          <button
            onClick={handleShare}
            disabled={isGeneratingPDF}
            className={`flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg transition-colors border border-gray-300 ${isGeneratingPDF ? 'opacity-50 cursor-not-allowed' : ''}`}
            title="Share setup guide"
          >
            {isGeneratingPDF ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Share2 className="w-5 h-5" />
                Share Guide
              </>
            )}
          </button>
          <button
            onClick={() => setShowMfaGuide(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Shield className="w-5 h-5" />
            View MFA Setup Guide
          </button>
        </div>
      </div>
    </div>
  );

  const MfaSetupGuide = () => (
    <div ref={mfaSetupRef} className="space-y-6 bg-white p-8 rounded-lg">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Set Up Multi-Factor Authentication (MFA)</h3>
        <ol className="space-y-8">
          <li className="flex items-start gap-6">
            <div className="flex-1">
              <p className="font-medium text-gray-900 mb-2">1. Start by getting the app</p>
              <p className="text-gray-600 text-sm mb-4">Download and install the Microsoft Authenticator app on your mobile device:</p>
              <div className="flex justify-center gap-8 mb-4">
                <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/images/mfa/google-play.png" 
                    alt="Get it on Google Play" 
                    className="h-16" 
                  />
                </a>
                <a href="https://apps.apple.com/app/microsoft-authenticator/id983156458" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/images/mfa/apple-appstore.png" 
                    alt="Download on the App Store" 
                    className="h-16" 
                  />
                </a>
              </div>
            </div>
          </li>
          
          <li className="flex items-start gap-6">
            <div className="flex-1">
              <p className="font-medium text-gray-900 mb-2">2. Set up your account</p>
              <img 
                src="/images/mfa/setup-account.png" 
                alt="Setup Account" 
                className="w-96 rounded-lg mb-4 mx-auto border border-gray-200" 
              />
              <p className="text-gray-600 text-sm">If prompted, allow notifications. Then add an account, and select "Work or school".</p>
            </div>
          </li>
          
          <li className="flex items-start gap-6">
            <div className="flex-1">
              <p className="font-medium text-gray-900 mb-2">3. Scan the QR Code</p>
              <img 
                src="/images/mfa/scan-qr.png" 
                alt="Scan QR Code" 
                className="w-96 rounded-lg mb-4 mx-auto border border-gray-200" 
              />
              <p className="text-gray-600 text-sm">Use the Microsoft Authenticator app to scan the QR code shown on your computer screen.</p>
            </div>
          </li>
          
          <li className="flex items-start gap-6">
            <div className="flex-1">
              <p className="font-medium text-gray-900 mb-2">4. Verify Your Identity</p>
              <img 
                src="/images/mfa/verify-identity.png" 
                alt="Verify Identity" 
                className="w-96 rounded-lg mb-4 mx-auto border border-gray-200" 
              />
              <p className="text-gray-600 text-sm">Choose to approve requests through the Microsoft Authenticator app when signing in.</p>
            </div>
          </li>
          
          <li className="flex items-start gap-6">
            <div className="flex-1">
              <p className="font-medium text-gray-900 mb-2">5. Approve Sign-in Requests</p>
              <img 
                src="/images/mfa/approve-request.png" 
                alt="Approve Request" 
                className="w-96 rounded-lg mb-4 mx-auto border border-gray-200" 
              />
              <p className="text-gray-600 text-sm">When signing in, you'll receive a notification on your phone. Open the app and approve the sign-in request.</p>
            </div>
          </li>
        </ol>
      </div>
      
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setShowMfaGuide(false)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Account Setup
        </button>
        <button
          onClick={handleShare}
          disabled={isGeneratingPDF}
          className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors ${isGeneratingPDF ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isGeneratingPDF ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Share2 className="w-5 h-5" />
              Share Guide
            </>
          )}
        </button>
      </div>
    </div>
  );

  if (!showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2 text-gray-900">
              Microsoft 365 Onboarding
            </h1>
            <p className="text-gray-600 mb-8">
              Create a new Microsoft 365 account setup guide
            </p>

            <div className="bg-white shadow rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        value={userDetails.firstName}
                        onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        value={userDetails.lastName}
                        onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Initial Password
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="password"
                      value={userDetails.password}
                      onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    <Key className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Generate Account Setup Guide
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {showMfaGuide ? <MfaSetupGuide /> : <AccountSetupGuide />}
      </div>
    </div>
  );
};

export default M365Onboarding;