import crypto from 'crypto';

export const generateSKU = (
  categoryPrefix: string,
  length: number = 8,
  useHyphen: boolean = true,
  includeTimestamp: boolean = true
): string => {
  const timestamp = includeTimestamp ? Date.now().toString(36).toUpperCase() : '';
  const randomPart = crypto.randomBytes(Math.ceil(length / 2)).toString('hex').toUpperCase().slice(0, length);
  const parts = [categoryPrefix, timestamp, randomPart].filter(part => part);
  return parts.join(useHyphen ? '-' : '');
};
