import React, { useState, useEffect } from 'react';
import { Settings, LogOut, Users, Share2, Rocket, Layout, Palette, X, Plus, Trash2, Check, AlertTriangle, Key, RefreshCw, Lock, Edit, Save, Mail, MessageSquare } from 'lucide-react';
import LogoAdjuster from './LogoAdjuster';
import DeploymentShare from './DeploymentShare';
import ConsultationViewer from './ConsultationViewer';
import { encrypt, decrypt, hashPassword, generateResetToken } from '../utils/crypto';
import { sendPasswordResetEmail } from '../utils/emailService';
import ResetPasswordModal from './ResetPasswordModal';

interface AdminPanelProps {
  onLogout: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'designer';
  passwordHash: string;
  resetToken?: string;
  resetTokenExpiry?: number;
  lastLogin?: string;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'logo' | 'users' | 'deploy' | 'consultations'>('consultations');
  const [showLogoAdjuster, setShowLogoAdjuster] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ 
    name: '', 
    email: '', 
    password: '',
    role: 'designer' as const 
  });
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentComplete, setDeploymentComplete] = useState(false);
  const [deployUrl, setDeployUrl] = useState('');
  const [showDeploymentShare, setShowDeploymentShare] = useState(false);
  const [deploymentError, setDeploymentError] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetUserEmail, setResetUserEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [deployId, setDeployId] = useState<string | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editedEmail, setEditedEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSending, setEmailSending] = useState(false);

  // Load users from localStorage on component mount
  useEffect(() => {
    try {
      const savedUsers = localStorage.getItem('corewerx_admin_users');
      if (savedUsers) {
        setUsers(JSON.parse(savedUsers));
      } else {
        // Initialize with default admin user if no users exist
        const defaultUsers: User[] = [
          {
            id: '1',
            name: 'Admin User',
            email: 'admin@corewerx.ae',
            passwordHash: hashPassword('admin2025'), // Default password
            role: 'admin',
            lastLogin: new Date().toISOString()
          }
        ];
        setUsers(defaultUsers);
        localStorage.setItem('corewerx_admin_users', JSON.stringify(defaultUsers));
      }

      // Check for existing deploy ID
      const savedDeployId = localStorage.getItem('corewerx_deploy_id');
      if (savedDeployId) {
        setDeployId(savedDeployId);
      }
    } catch (error) {
      console.error('Error loading users:', error);
    }
  }, []);

  const handleLogout = () => {
    // Remove admin access from localStorage
    localStorage.removeItem('corewerx_admin_access');
    onLogout();
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) return;

    // Hash the password before storing
    const passwordHash = hashPassword(newUser.password);

    const newUserObj: User = {
      id: Date.now().toString(),
      name: newUser.name,
      email: newUser.email,
      passwordHash,
      role: newUser.role
    };

    const updatedUsers = [...users, newUserObj];
    setUsers(updatedUsers);
    localStorage.setItem('corewerx_admin_users', JSON.stringify(updatedUsers));
    
    // Reset form
    setNewUser({ name: '', email: '', password: '', role: 'designer' });
  };

  const handleDeleteUser = (id: string) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('corewerx_admin_users', JSON.stringify(updatedUsers));
  };

  const handleResetPassword = (email: string) => {
    setResetUserEmail(email);
    setShowResetModal(true);
  };

  const handleConfirmReset = async () => {
    setEmailSending(true);
    
    try {
      // Find the user
      const userIndex = users.findIndex(user => user.email === resetUserEmail);
      if (userIndex === -1) {
        setEmailSending(false);
        return;
      }
      
      const user = users[userIndex];

      // Generate reset token and set expiry (24 hours from now)
      const resetToken = generateResetToken();
      const resetTokenExpiry = Date.now() + 24 * 60 * 60 * 1000;

      // Update user
      const updatedUsers = [...users];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        resetToken,
        resetTokenExpiry
      };

      // Save to localStorage
      setUsers(updatedUsers);
      localStorage.setItem('corewerx_admin_users', JSON.stringify(updatedUsers));

      // Send the password reset email
      const emailSent = await sendPasswordResetEmail(
        user.email,
        resetToken,
        user.name
      );

      if (emailSent) {
        // Show success message
        setResetSuccess(true);
        setTimeout(() => {
          setResetSuccess(false);
          setShowResetModal(false);
        }, 3000);
      } else {
        // Handle email sending failure
        alert('Failed to send password reset email. Please try again.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred during password reset. Please try again.');
    } finally {
      setEmailSending(false);
    }
  };

  const handleEditUserEmail = (user: User) => {
    setEditingUserId(user.id);
    setEditedEmail(user.email);
    setEmailError('');
  };

  const handleSaveUserEmail = (userId: string) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(editedEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Check if email is already in use by another user
    const emailExists = users.some(user => user.id !== userId && user.email === editedEmail);
    if (emailExists) {
      setEmailError('This email is already in use by another user');
      return;
    }

    // Update the user's email
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, email: editedEmail };
      }
      return user;
    });

    // Save to localStorage
    setUsers(updatedUsers);
    localStorage.setItem('corewerx_admin_users', JSON.stringify(updatedUsers));
    
    // Reset editing state
    setEditingUserId(null);
    setEditedEmail('');
    setEmailError('');
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditedEmail('');
    setEmailError('');
  };

  const handleDeploy = (environment: 'production' | 'staging') => {
    setIsDeploying(true);
    setDeploymentError('');
    
    // Simulate deployment process
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% success rate for demo
        setIsDeploying(false);
        setDeploymentComplete(true);
        
        // Set the deployment URL
        const newDeployId = deployId || Math.random().toString(36).substring(2, 8);
        if (!deployId) {
          setDeployId(newDeployId);
          localStorage.setItem('corewerx_deploy_id', newDeployId);
        }
        
        const url = environment === 'production' 
          ? 'https://corewerx.netlify.app' 
          : `https://staging-corewerx-${newDeployId}.netlify.app`;
        
        setDeployUrl(url);
        setShowDeploymentShare(true);
      } else {
        // Simulate deployment error
        setIsDeploying(false);
        setDeploymentError('Deployment failed. Please try again or contact support.');
      }
    }, 3000);
  };

  return (
    <>
      {/* Admin Panel Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-40 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg"
        title="Admin Panel"
      >
        <Settings size={20} />
      </button>

      {/* Admin Panel Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-dark-navy/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-navy/90 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden border border-bright-cyan/20 shadow-lg flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="bg-dark-navy/70 w-full md:w-64 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Admin Panel</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white md:hidden"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <nav className="space-y-2 flex-1">
                <button
                  onClick={() => setActiveTab('consultations')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'consultations' 
                      ? 'bg-bright-cyan text-white' 
                      : 'text-gray-300 hover:bg-navy/50'
                  }`}
                >
                  <MessageSquare size={18} />
                  <span>Consultation Requests</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('logo')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'logo' 
                      ? 'bg-bright-cyan text-white' 
                      : 'text-gray-300 hover:bg-navy/50'
                  }`}
                >
                  <Layout size={18} />
                  <span>Logo Adjuster</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'users' 
                      ? 'bg-bright-cyan text-white' 
                      : 'text-gray-300 hover:bg-navy/50'
                  }`}
                >
                  <Users size={18} />
                  <span>User Management</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('deploy')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'deploy' 
                      ? 'bg-bright-cyan text-white' 
                      : 'text-gray-300 hover:bg-navy/50'
                  }`}
                >
                  <Rocket size={18} />
                  <span>Deployment</span>
                </button>
              </nav>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors mt-auto"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 p-6 overflow-y-auto">
              {activeTab === 'consultations' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Consultation Requests</h3>
                  <ConsultationViewer />
                </div>
              )}
              
              {activeTab === 'logo' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Logo Adjustment</h3>
                  <p className="text-gray-300 mb-6">
                    Adjust the position, size, and appearance of the logo in the navbar and footer.
                  </p>
                  
                  <button
                    onClick={() => setShowLogoAdjuster(true)}
                    className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Palette size={18} />
                    Open Logo Adjuster
                  </button>
                </div>
              )}
              
              {activeTab === 'users' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">User Management</h3>
                  <p className="text-gray-300 mb-6">
                    Manage admin and designer access to the website administration panel. All passwords are securely encrypted.
                  </p>
                  
                  {/* User List */}
                  <div className="bg-navy/50 border border-bright-cyan/10 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-white mb-4">Current Users</h4>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Login</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          {users.map(user => (
                            <tr key={user.id} className="hover:bg-navy/30">
                              <td className="px-4 py-3 whitespace-nowrap text-white">{user.name}</td>
                              <td className="px-4 py-3 whitespace-nowrap text-gray-300">
                                {editingUserId === user.id ? (
                                  <div className="flex flex-col">
                                    <input
                                      type="email"
                                      value={editedEmail}
                                      onChange={(e) => setEditedEmail(e.target.value)}
                                      className="w-full bg-navy/30 border border-gray-600 rounded-lg px-2 py-1 text-white focus:outline-none focus:border-bright-cyan text-sm"
                                    />
                                    {emailError && (
                                      <span className="text-red-400 text-xs mt-1">{emailError}</span>
                                    )}
                                  </div>
                                ) : (
                                  user.email
                                )}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  user.role === 'admin' 
                                    ? 'bg-bright-cyan/20 text-bright-cyan' 
                                    : 'bg-amber-500/20 text-amber-400'
                                }`}>
                                  {user.role}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-gray-300">
                                {user.lastLogin 
                                  ? new Date(user.lastLogin).toLocaleDateString() 
                                  : 'Never'}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end gap-2">
                                  {editingUserId === user.id ? (
                                    <>
                                      <button 
                                        onClick={() => handleSaveUserEmail(user.id)}
                                        className="text-green-400 hover:text-green-300 transition-colors"
                                        title="Save Email"
                                      >
                                        <Save size={16} />
                                      </button>
                                      <button 
                                        onClick={handleCancelEdit}
                                        className="text-gray-400 hover:text-gray-300 transition-colors"
                                        title="Cancel"
                                      >
                                        <X size={16} />
                                      </button>
                                    </>
                                  ) : (
                                    <button 
                                      onClick={() => handleEditUserEmail(user)}
                                      className="text-blue-400 hover:text-blue-300 transition-colors"
                                      title="Edit Email"
                                    >
                                      <Edit size={16} />
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => handleResetPassword(user.email)}
                                    className="text-amber-400 hover:text-amber-300 transition-colors"
                                    title="Reset Password"
                                  >
                                    <Key size={16} />
                                  </button>
                                  <button 
                                    onClick={() => handleDeleteUser(user.id)}
                                    className="text-red-400 hover:text-red-300 transition-colors"
                                    disabled={user.role === 'admin' && users.filter(u => u.role === 'admin').length === 1}
                                    title={user.role === 'admin' && users.filter(u => u.role === 'admin').length === 1 
                                      ? "Cannot delete the only admin user" 
                                      : "Delete user"}
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  {/* Add New User Form */}
                  <div className="bg-navy/50 border border-bright-cyan/10 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-4">Add New User</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input 
                          type="text" 
                          value={newUser.name}
                          onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                          className="w-full bg-navy/30 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-bright-cyan"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input 
                          type="email" 
                          value={newUser.email}
                          onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                          className="w-full bg-navy/30 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-bright-cyan"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                        <input 
                          type="password" 
                          value={newUser.password}
                          onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                          className="w-full bg-navy/30 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-bright-cyan"
                          placeholder="Secure password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Role</label>
                        <select 
                          value={newUser.role}
                          onChange={(e) => setNewUser({...newUser, role: e.target.value as 'admin' | 'designer'})}
                          className="w-full bg-navy/30 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-bright-cyan"
                        >
                          <option value="designer">Designer</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button 
                        onClick={handleAddUser}
                        disabled={!newUser.name || !newUser.email || !newUser.password}
                        className={`flex items-center gap-2 bg-bright-cyan hover:bg-electric-blue text-white px-4 py-2 rounded-lg transition-colors ${
                          !newUser.name || !newUser.email || !newUser.password ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <Plus size={18} />
                        Add User
                      </button>
                    </div>
                  </div>
                  
                  {/* Email Service Configuration */}
                  <div className="mt-6 bg-navy/50 border border-bright-cyan/10 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Mail size={16} className="text-bright-cyan" />
                      Email Service Configuration
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Password reset emails are sent using EmailJS. For this demo, reset links are logged to the console instead of actually sending emails.
                    </p>
                    <div className="bg-dark-navy/50 p-3 rounded-lg border border-bright-cyan/10">
                      <p className="text-xs text-gray-400 font-mono">
                        To configure real email sending, update the EmailJS credentials in <span className="text-bright-cyan">src/utils/emailService.ts</span>:
                      </p>
                      <pre className="text-xs text-gray-300 font-mono mt-2 overflow-x-auto">
{`const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';`}
                      </pre>
                    </div>
                  </div>
                  
                  {/* Security Info */}
                  <div className="mt-6 bg-navy/50 border border-bright-cyan/10 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Lock size={16} className="text-bright-cyan" />
                      Security Information
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• All passwords are securely hashed using SHA-256</li>
                      <li>• Password reset tokens are valid for 24 hours</li>
                      <li>• User data is encrypted before storage</li>
                      <li>• Default admin access key: <span className="font-mono bg-dark-navy/50 px-2 py-1 rounded">design2025</span></li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'deploy' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Deployment</h3>
                  <p className="text-gray-300 mb-6">
                    Deploy your website to production or staging environments. The production site will be deployed to <span className="font-mono bg-dark-navy/50 px-2 py-1 rounded">corewerx.netlify.app</span>.
                  </p>
                  
                  {deploymentError && (
                    <div className="mb-6 bg-red-500/20 border border-red-500/30 text-white p-4 rounded-lg flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">Deployment Error</h4>
                        <p>{deploymentError}</p>
                      </div>
                    </div>
                  )}
                  
                  {deploymentComplete && !deploymentError && (
                    <div className="mb-6 bg-green-500/20 border border-green-500/30 text-white p-4 rounded-lg flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold mb-1">Deployment Successful!</h4>
                        <p>Your website has been deployed successfully.</p>
                        <div className="mt-2">
                          <a 
                            href={deployUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-bright-cyan hover:text-electric-blue flex items-center gap-1"
                          >
                            {deployUrl} <Share2 size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-navy/50 border border-bright-cyan/10 rounded-lg p-6">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Rocket size={18} className="text-bright-cyan" />
                        Production
                      </h4>
                      <p className="text-gray-300 mb-4">
                        Deploy to the live production environment at corewerx.netlify.app.
                      </p>
                      <button 
                        onClick={() => handleDeploy('production')}
                        disabled={isDeploying}
                        className={`w-full bg-bright-cyan hover:bg-electric-blue text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                          isDeploying ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isDeploying ? (
                          <>
                            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>Deploying...</span>
                          </>
                        ) : (
                          <>
                            <Rocket size={16} />
                            <span>Deploy to Production</span>
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div className="bg-navy/50 border border-bright-cyan/10 rounded-lg p-6">
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Share2 size={18} className="text-bright-cyan" />
                        Staging
                      </h4>
                      <p className="text-gray-300 mb-4">
                        Deploy to the staging environment for testing.
                      </p>
                      <button 
                        onClick={() => handleDeploy('staging')}
                        disabled={isDeploying}
                        className={`w-full bg-navy hover:bg-dark-navy text-white font-bold py-2 px-4 rounded-lg transition-colors border border-bright-cyan/20 flex items-center justify-center gap-2 ${
                          isDeploying ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isDeploying ? (
                          <>
                            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>Deploying...</span>
                          </>
                        ) : (
                          <>
                            <Share2 size={16} />
                            <span>Deploy to Staging</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-navy/50 border border-bright-cyan/10 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">Deployment History</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Environment</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Deployed By</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          {deploymentComplete && (
                            <tr className="hover:bg-navy/30">
                              <td className="px-4 py-3 whitespace-nowrap text-white">{new Date().toLocaleString()}</td>
                              <td className="px-4 py-3 whitespace-nowrap text-gray-300">
                                {deployUrl.includes('staging') ? 'Staging' : 'Production'}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                                  Success
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-gray-300">Admin User</td>
                            </tr>
                          )}
                          <tr className="hover:bg-navy/30">
                            <td className="px-4 py-3 whitespace-nowrap text-white">2023-06-15 14:32:45</td>
                            <td className="px-4 py-3 whitespace-nowrap text-gray-300">Production</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                                Success
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-gray-300">Admin User</td>
                          </tr>
                          <tr className="hover:bg-navy/30">
                            <td className="px-4 py-3 whitespace-nowrap text-white">2023-06-10 09:15:22</td>
                            <td className="px-4 py-3 whitespace-nowrap text-gray-300">Staging</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
                                Failed
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-gray-300">Designer User</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  {/* Netlify Deployment Info */}
                  <div className="mt-6 bg-navy/50 border border-bright-cyan/10 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <RefreshCw size={16} className="text-bright-cyan" />
                      Continuous Deployment
                    </h4>
                    <p className="text-gray-300 text-sm">
                      The website is automatically deployed to Netlify whenever changes are pushed to the main branch. 
                      The production URL is <span className="font-mono bg-dark-navy/50 px-2 py-1 rounded">corewerx.netlify.app</span>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Logo Adjuster Modal */}
      {showLogoAdjuster && (
        <LogoAdjuster onClose={() => setShowLogoAdjuster(false)} />
      )}
      
      {/* Deployment Share Modal */}
      {showDeploymentShare && (
        <DeploymentShare 
          isOpen={showDeploymentShare}
          onClose={() => setShowDeploymentShare(false)}
          deployUrl={deployUrl}
        />
      )}
      
      {/* Reset Password Modal */}
      <ResetPasswordModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={handleConfirmReset}
        email={resetUserEmail}
        success={resetSuccess}
        isSubmitting={emailSending}
      />
    </>
  );
};

export default AdminPanel;