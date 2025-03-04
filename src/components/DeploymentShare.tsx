import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface DeploymentShareProps {
  deployUrl?: string;
  isOpen: boolean;
  onClose: () => void;
}

const DeploymentShare: React.FC<DeploymentShareProps> = ({ 
  deployUrl = 'https://corewerx.netlify.app',
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (isOpen && deployUrl) {
      // Generate QR code using a free API
      const encodedUrl = encodeURIComponent(deployUrl);
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedUrl}`);
    }
  }, [isOpen, deployUrl]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(deployUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-navy/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-navy/90 rounded-lg p-6 max-w-md w-full border border-bright-cyan/20 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Your Site is Live!</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p className="text-gray-300 mb-4">
          Your website is now deployed to <span className="font-mono bg-dark-navy/50 px-2 py-1 rounded">corewerx.netlify.app</span> and ready to share!
        </p>
        
        <div className="flex justify-center mb-6">
          {qrCodeUrl && (
            <div className="bg-white p-2 rounded-lg">
              <img src={qrCodeUrl} alt="QR Code" className="w-32 h-32" />
            </div>
          )}
        </div>
        
        <div className="flex items-center mb-6">
          <div className="flex-1 bg-dark-navy/80 rounded-l-lg px-3 py-2 border border-bright-cyan/10 overflow-hidden">
            <p className="text-gray-300 truncate">{deployUrl}</p>
          </div>
          <button
            onClick={copyToClipboard}
            className="bg-bright-cyan hover:bg-electric-blue text-white px-4 py-2 rounded-r-lg transition-colors flex items-center"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <a
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-electric-blue hover:bg-bright-cyan text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <ExternalLink size={18} className="mr-2" />
            Visit Site
          </a>
          
          <button
            onClick={copyToClipboard}
            className="bg-navy hover:bg-dark-navy text-white py-2 px-4 rounded-lg border border-bright-cyan/20 transition-colors flex items-center justify-center"
          >
            <Copy size={18} className="mr-2" />
            Copy Link
          </button>
        </div>
        
        <div className="mt-6 text-sm text-gray-400 border-t border-gray-700 pt-4">
          <p>
            The site is deployed to Netlify. You can manage your deployment settings and analytics through the Netlify dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeploymentShare;