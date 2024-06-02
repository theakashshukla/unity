import crypto from 'crypto';

export const generateRandomHex = (length: number): string => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};
