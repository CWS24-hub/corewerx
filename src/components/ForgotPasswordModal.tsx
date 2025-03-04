import React, { useState } from 'react';
import { X, Mail, Check, AlertTriangle } from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Validate email exists in users
    setTimeout(() => {
      try {
        const savedUsers = localStorage.getItem('corewerx_admin_users');
        if (savedUsers) {
          const users = JSON.parse(savedUsers);
          const user = users.find((u: any) => u.email === email);
          
          if (user) {
            // Generate reset token and set expiry (24 hours from now)
            const resetToken = Math.random().toString(36).substring(2, 15);
            const resetTokenExpiry = Date.now() + 24 * 60 * 60 * 1000;
            
            // Update user
            const updatedUsers = users.map((u: any) => {
              if (u.email === email) {
                return {
                  ...u,
                  resetToken,
                  resetTokenExpiry
                };
              }
              return u;
            });
            
            // Save to localStorage
            localStorage.setItem('corewerx_admin_users', JSON.stringify(updatedUsers));
            
            setSuccess(true);
            setTimeout(() => {
              onSubmit(email);
            }, 2000);
          } else {
            setError('Email not found. Please check and try again.');
          }
        } else {
          setError('No users found. Please contact the administrator.');
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
        console.error('Password reset error:', error);
      }
      
      setIsSubmitting(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-navy/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-navy/90 rounded-lg p-6 max-w-md w-full border border-bright-cyan/20 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Mail className="w-5 h-5 mr-2 text-bright-cyan" />
            Reset Password
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {success ? (
          <div className="bg-green-500/20 border border-green-500/30 text-white p-4 rounded-lg flex items-start gap-3 mb-6">
            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold mb-1">Password Reset Email Sent</h4>
              <p>A password reset link has been sent to {email}. The link will expire in 24 hours.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-gray-300 mb-4">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            
            <div>
              <label htmlFor="reset-email" className="block text-sm font-medium text-gray-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="reset-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan"
                placeholder="Enter your email"
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 text-white p-3 rounded-lg flex items-start gap-2">
                <AlertTriangle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className={`px-4 py-2 bg-bright-cyan hover:bg-electric-blue text-white rounded-lg transition-colors flex items-center gap-2 ${
                  isSubmitting || !email ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;