import React, { useState, useEffect } from 'react';
import { Lock, X, Eye, EyeOff, Mail, Key, AlertTriangle } from 'lucide-react';
import { hashPassword, verifyPassword } from '../utils/crypto';
import ForgotPasswordModal from './ForgotPasswordModal';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose, onLogin }) => {
  const [loginMethod, setLoginMethod] = useState<'key' | 'password'>('key');
  const [accessKey, setAccessKey] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setAccessKey('');
      setEmail('');
      setPassword('');
      setError('');
      setIsSubmitting(false);
      setLoginMethod('key');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (loginMethod === 'key') {
      // Validate access key - in a real app, this would be more secure
      const validAccessKey = 'design2025';
      
      setTimeout(() => {
        if (accessKey === validAccessKey) {
          // Store the access key in localStorage for persistence
          localStorage.setItem('corewerx_admin_access', validAccessKey);
          onLogin();
          onClose();
        } else {
          setError('Invalid access key. Please try again.');
        }
        setIsSubmitting(false);
      }, 1000); // Simulate API call
    } else {
      // Validate email/password
      setTimeout(() => {
        try {
          // Get users from localStorage
          const savedUsers = localStorage.getItem('corewerx_admin_users');
          if (savedUsers) {
            const users = JSON.parse(savedUsers);
            const user = users.find((u: any) => u.email === email);
            
            if (user && verifyPassword(password, user.passwordHash)) {
              // Update last login time
              const updatedUsers = users.map((u: any) => {
                if (u.email === email) {
                  return {
                    ...u,
                    lastLogin: new Date().toISOString()
                  };
                }
                return u;
              });
              
              localStorage.setItem('corewerx_admin_users', JSON.stringify(updatedUsers));
              
              // Store access in localStorage
              localStorage.setItem('corewerx_admin_access', 'user_login');
              localStorage.setItem('corewerx_admin_user', email);
              
              onLogin();
              onClose();
            } else {
              setError('Invalid email or password. Please try again.');
            }
          } else {
            setError('No users found. Please use access key to login.');
          }
        } catch (error) {
          setError('An error occurred. Please try again.');
          console.error('Login error:', error);
        }
        
        setIsSubmitting(false);
      }, 1000); // Simulate API call
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-navy/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-navy/90 rounded-lg p-6 max-w-md w-full border border-bright-cyan/20 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Lock className="w-5 h-5 mr-2 text-bright-cyan" />
            Admin Access
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Login Method Tabs */}
        <div className="flex mb-6 bg-dark-navy/50 rounded-lg p-1">
          <button
            onClick={() => setLoginMethod('key')}
            className={`flex-1 py-2 rounded-md transition-colors flex items-center justify-center gap-2 ${
              loginMethod === 'key' 
                ? 'bg-bright-cyan text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Key size={16} />
            <span>Access Key</span>
          </button>
          <button
            onClick={() => setLoginMethod('password')}
            className={`flex-1 py-2 rounded-md transition-colors flex items-center justify-center gap-2 ${
              loginMethod === 'password' 
                ? 'bg-bright-cyan text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Mail size={16} />
            <span>Email & Password</span>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {loginMethod === 'key' ? (
            <div>
              <label htmlFor="accessKey" className="block text-sm font-medium text-gray-200 mb-2">
                Access Key
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="accessKey"
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan pr-10"
                  placeholder="Enter your access key"
                  autoComplete="off"
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
          ) : (
            <>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan pr-10"
                    placeholder="Enter your password"
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
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-bright-cyan hover:text-electric-blue text-sm"
                >
                  Forgot password?
                </button>
              </div>
            </>
          )}
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-white p-3 rounded-lg flex items-start gap-2">
              <AlertTriangle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting || (loginMethod === 'key' ? !accessKey : (!email || !password))}
            className={`w-full bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center ${
              isSubmitting || (loginMethod === 'key' ? !accessKey : (!email || !password)) ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Verifying...
              </>
            ) : (
              'Access Admin Panel'
            )}
          </button>
        </form>
        
        <div className="mt-6 text-sm text-gray-400 border-t border-gray-700 pt-4">
          <p>
            This area is restricted to authorized personnel only. If you need access, please contact the website administrator.
          </p>
        </div>
      </div>
      
      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        onSubmit={(email) => {
          setShowForgotPassword(false);
          // In a real app, this would send a password reset email
          alert(`Password reset link would be sent to ${email}`);
        }}
      />
    </div>
  );
};

export default AdminLogin;