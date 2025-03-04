import React, { useState } from 'react';
import { Copy, Check, Share2, Link as LinkIcon } from 'lucide-react';

interface ShareLinkProps {
  title?: string;
  message?: string;
}

const ShareLink: React.FC<ShareLinkProps> = ({ 
  title = "Share this website",
  message = "Check out this awesome IT solutions website!"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareViaNavigator = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CoreWerx Solutions',
          text: message,
          url: currentUrl,
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-32 right-4 z-40 bg-bright-cyan hover:bg-electric-blue text-white rounded-full p-3 shadow-lg"
        title="Share this website"
      >
        <Share2 size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-dark-navy/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-navy/90 rounded-lg p-6 max-w-md w-full border border-bright-cyan/20 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-300 mb-4">{message}</p>
            
            <div className="flex items-center mb-6">
              <div className="flex-1 bg-dark-navy/80 rounded-l-lg px-3 py-2 border border-bright-cyan/10 overflow-hidden">
                <p className="text-gray-300 truncate">{currentUrl}</p>
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
              {navigator.share && (
                <button
                  onClick={shareViaNavigator}
                  className="bg-electric-blue hover:bg-bright-cyan text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Share2 size={18} className="mr-2" />
                  Share
                </button>
              )}
              
              <button
                onClick={copyToClipboard}
                className="bg-navy hover:bg-dark-navy text-white py-2 px-4 rounded-lg border border-bright-cyan/20 transition-colors flex items-center justify-center"
              >
                <LinkIcon size={18} className="mr-2" />
                Copy Link
              </button>
              
              {/* Add more share options if needed */}
            </div>
            
            {shareSuccess && (
              <div className="mt-4 text-center text-green-400">
                <p>Shared successfully!</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Success notification */}
      {copied && !isOpen && (
        <div className="fixed bottom-32 right-16 bg-bright-cyan text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-out z-50">
          <Check size={18} />
          <span>Link copied!</span>
        </div>
      )}
    </>
  );
};

export default ShareLink;