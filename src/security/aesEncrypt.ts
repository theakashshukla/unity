import crypto from 'crypto';

export const aesEncrypt = (text: string, key: Buffer, iv: Buffer): { iv: string, encryptedData: string } => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};
