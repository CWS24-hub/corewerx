import React, { useState } from 'react';
import { X, Mail, Check, AlertTriangle } from 'lucide-react';

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  email: string;
  success: boolean;
  isSubmitting?: boolean;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  email,
  success,
  isSubmitting = false
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm();
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
              <p className="mt-2 text-sm text-gray-300">
                <strong>Note:</strong> In this demo, the reset link is logged to the browser console instead of sending an actual email.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-amber-500/10 border border-amber-500/30 text-white p-4 rounded-lg flex items-start gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1">Confirm Password Reset</h4>
                <p>Are you sure you want to reset the password for {email}? A reset link will be sent to this email address.</p>
                <p className="mt-2 text-sm text-gray-300">
                  <strong>Note:</strong> In this demo, the reset link will be logged to the browser console instead of sending an actual email.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-bright-cyan hover:bg-electric-blue text-white rounded-lg transition-colors flex items-center gap-2"
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

export default ResetPasswordModal;