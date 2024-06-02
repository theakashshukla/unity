import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);

export const decrypt = (iv: string, encryptedData: string): string => {
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
