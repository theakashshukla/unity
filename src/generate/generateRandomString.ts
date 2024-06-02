import crypto from 'crypto';

export const generateRandomString = (length: number): string => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').toUpperCase().slice(0, length);
};
