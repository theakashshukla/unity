import crypto from 'crypto';

export const aesDecrypt = (iv: string, encryptedData: string, key: Buffer): string => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
