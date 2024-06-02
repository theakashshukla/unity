import crypto from 'crypto';

export const verifyHash = (password: string, hash: string): boolean => 
  crypto.createHash('sha256').update(password).digest('hex') === hash;
