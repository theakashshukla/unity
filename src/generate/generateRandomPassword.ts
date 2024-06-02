import crypto from 'crypto';

export const generateRandomPassword = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomBytes(1)[0] % characters.length;
    password += characters[randomIndex];
  }
  return password;
};
