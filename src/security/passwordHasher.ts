import crypto from 'crypto';

export const passwordHasher = (password: string): string => 
  crypto.createHash('sha256').update(password).digest('hex');
