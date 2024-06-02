import crypto from 'crypto';

export const generateRandomIV = (): Buffer => {
  return crypto.randomBytes(16); 
};
