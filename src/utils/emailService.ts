import emailjs from 'emailjs-com';

// EmailJS service configuration
// You'll need to replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_corewerx';
const TEMPLATE_ID = 'template_password_reset';
const USER_ID = 'YOUR_USER_ID'; // Replace with your actual EmailJS user ID

/**
 * Send a password reset email to a user
 * @param email The recipient's email address
 * @param resetToken The password reset token
 * @param name The recipient's name
 * @returns Promise that resolves when the email is sent
 */
export const sendPasswordResetEmail = async (
  email: string, 
  resetToken: string, 
  name: string
): Promise<boolean> => {
  try {
    // Create a reset URL that includes the token
    const resetUrl = `${window.location.origin}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;
    
    // Prepare the template parameters
    const templateParams = {
      to_email: email,
      to_name: name,
      reset_link: resetUrl,
      company_name: 'CoreWerx Solutions',
      support_email: 'support@corewerx.ae',
      expiry_hours: '24'
    };
    
    // For development/demo purposes, log the reset URL instead of actually sending an email
    console.log('Password reset link (development only):', resetUrl);
    
    // In a production environment, uncomment this to actually send the email
    /*
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    
    return response.status === 200;
    */
    
    // Simulate successful email sending for demo purposes
    return true;
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return false;
  }
};

/**
 * Send a notification email to a user that their password was reset
 * @param email The recipient's email address
 * @param name The recipient's name
 * @returns Promise that resolves when the email is sent
 */
export const sendPasswordChangedEmail = async (
  email: string,
  name: string
): Promise<boolean> => {
  try {
    // Prepare the template parameters
    const templateParams = {
      to_email: email,
      to_name: name,
      company_name: 'CoreWerx Solutions',
      support_email: 'support@corewerx.ae'
    };
    
    // For development/demo purposes, log a message instead of actually sending an email
    console.log('Password changed notification would be sent to:', email);
    
    // In a production environment, uncomment this to actually send the email
    /*
    const response = await emailjs.send(
      SERVICE_ID,
      'template_password_changed', // Different template for password changed notification
      templateParams,
      USER_ID
    );
    
    return response.status === 200;
    */
    
    // Simulate successful email sending for demo purposes
    return true;
  } catch (error) {
    console.error('Error sending password changed notification:', error);
    return false;
  }
};

/**
 * Initialize EmailJS
 * Call this function once when your application starts
 */
export const initEmailService = (): void => {
  emailjs.init(USER_ID);
};