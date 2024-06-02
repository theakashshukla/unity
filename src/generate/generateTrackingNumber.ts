import crypto from 'crypto';

export const generateTrackingNumber = (
  prefix: string = 'TRK',
  length: number = 12,
  includeHyphen: boolean = true
): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomPart = crypto.randomBytes(Math.ceil(length / 2)).toString('hex').toUpperCase().slice(0, length);
  const parts = [prefix, timestamp, randomPart].filter(part => part !== '');
  return parts.join(includeHyphen ? '-' : '');
};
