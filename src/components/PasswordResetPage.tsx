import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Key, Check, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { hashPassword } from '../utils/crypto';
import { sendPasswordChangedEmail } from '../utils/emailService';

const PasswordResetPage: React.FC = () => {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState('');
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [tokenExpired, setTokenExpired] = useState(false);

  useEffect(() => {
    // Extract token and email from URL parameters
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get('token');
    const urlEmail = params.get('email');
    
    if (urlToken && urlEmail) {
      setToken(urlToken);
      setEmail(urlEmail);
      
      // Validate token
      validateToken(urlToken, urlEmail);
    } else {
      setError('Invalid reset link. Please request a new password reset.');
      setTokenValid(false);
    }
  }, []);

  const validateToken = (token: string, email: string) => {
    try {
      // Get users from localStorage
      const savedUsers = localStorage.getItem('corewerx_admin_users');
      if (!savedUsers) {
        setError('User database not found.');
        setTokenValid(false);
        return;
      }
      
      const users = JSON.parse(savedUsers);
      const user = users.find((u: any) => u.email === email);
      
      if (!user) {
        setError('User not found.');
        setTokenValid(false);
        return;
      }
      
      if (user.resetToken !== token) {
        setError('Invalid reset token.');
        setTokenValid(false);
        return;
      }
      
      // Check if token is expired
      if (!user.resetTokenExpiry || user.resetTokenExpiry < Date.now()) {
        setError('Reset token has expired. Please request a new password reset.');
        setTokenValid(false);
        setTokenExpired(true);
        return;
      }
      
      // Token is valid
      setTokenValid(true);
    } catch (error) {
      console.error('Error validating token:', error);
      setError('An error occurred while validating your reset token.');
      setTokenValid(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Validate passwords
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        setIsSubmitting(false);
        return;
      }
      
      if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
        setIsSubmitting(false);
        return;
      }
      
      // Get users from localStorage
      const savedUsers = localStorage.getItem('corewerx_admin_users');
      if (!savedUsers) {
        setError('User database not found.');
        setIsSubmitting(false);
        return;
      }
      
      const users = JSON.parse(savedUsers);
      const userIndex = users.findIndex((u: any) => u.email === email);
      
      if (userIndex === -1) {
        setError('User not found.');
        setIsSubmitting(false);
        return;
      }
      
      // Update user's password
      const updatedUsers = [...users];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        passwordHash: hashPassword(password),
        resetToken: null,
        resetTokenExpiry: null
      };
      
      // Save to localStorage
      localStorage.setItem('corewerx_admin_users', JSON.stringify(updatedUsers));
      
      // Send password changed notification email
      await sendPasswordChangedEmail(email, updatedUsers[userIndex].name);
      
      // Show success message
      setResetSuccess(true);
      
      // Clear form
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error resetting password:', error);
      setError('An error occurred while resetting your password.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-navy flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-navy/90 rounded-lg p-8 max-w-md w-full border border-bright-cyan/20 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <Key className="w-8 h-8 text-bright-cyan" />
          <h1 className="text-2xl font-bold text-white">Reset Your Password</h1>
        </div>
        
        {tokenValid === false && (
          <div className="bg-red-500/20 border border-red-500/30 text-white p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1">Invalid Reset Link</h4>
                <p>{error}</p>
                {tokenExpired && (
                  <button 
                    className="mt-3 bg-bright-cyan hover:bg-electric-blue text-white px-4 py-2 rounded-lg transition-colors text-sm"
                    onClick={() => window.location.href = '/'}
                  >
                    Request New Reset Link
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        
        {resetSuccess && (
          <div className="bg-green-500/20 border border-green-500/30 text-white p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1">Password Reset Successful</h4>
                <p>Your password has been successfully reset. You can now log in with your new password.</p>
                <button 
                  className="mt-3 bg-bright-cyan hover:bg-electric-blue text-white px-4 py-2 rounded-lg transition-colors text-sm"
                  onClick={() => window.location.href = '/'}
                >
                  Go to Login
                </button>
              </div>
            </div>
          </div>
        )}
        
        {tokenValid && !resetSuccess && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                readOnly
                className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan opacity-70"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan pr-10"
                  placeholder="Enter new password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan pr-10"
                  placeholder="Confirm new password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 text-white p-3 rounded-lg flex items-start gap-2">
                <AlertTriangle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting || !password || !confirmPassword}
              className={`w-full bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                isSubmitting || !password || !confirmPassword ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Resetting Password...</span>
                </>
              ) : (
                'Reset Password'
              )}
            </button>
          </form>
        )}
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Remember your password? <a href="/" className="text-bright-cyan hover:text-electric-blue">Back to login</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordResetPage;