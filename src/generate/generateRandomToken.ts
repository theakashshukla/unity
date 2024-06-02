import crypto from 'crypto';

export const generateRandomToken = (length: number): string => {
  return crypto.randomBytes(length).toString('hex');
};
