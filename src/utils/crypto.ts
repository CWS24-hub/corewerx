/**
 * Utility functions for encryption and password handling
 */
import CryptoJS from 'crypto-js';

// Secret key for encryption - in a real app, this would be stored in environment variables
const SECRET_KEY = 'corewerx-secure-key-2025';

/**
 * Encrypt a string using AES encryption
 * @param text The text to encrypt
 * @returns Encrypted string
 */
export const encrypt = (text: string): string => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

/**
 * Decrypt an encrypted string
 * @param encryptedText The encrypted text to decrypt
 * @returns Decrypted string
 */
export const decrypt = (encryptedText: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

/**
 * Hash a password using SHA-256
 * @param password The password to hash
 * @returns Hashed password
 */
export const hashPassword = (password: string): string => {
  return CryptoJS.SHA256(password).toString();
};

/**
 * Verify a password against a hash
 * @param password The password to verify
 * @param hash The hash to verify against
 * @returns True if the password matches the hash
 */
export const verifyPassword = (password: string, hash: string): boolean => {
  const hashedPassword = hashPassword(password);
  return hashedPassword === hash;
};

/**
 * Generate a random token for password reset
 * @returns Random token
 */
export const generateResetToken = (): string => {
  return CryptoJS.lib.WordArray.random(16).toString();
};