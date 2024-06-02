import crypto from 'crypto';

export const generateRegistrationNumber = (
  userPrefix: string,
  length: number = 6,
  useHyphen: boolean = true,
  includeTimestamp: boolean = true
): string => {
  const timestamp = includeTimestamp ? Date.now().toString(36).toUpperCase() : '';
  const randomPart = crypto.randomBytes(Math.ceil(length / 2)).toString('hex').toUpperCase().slice(0, length);
  const parts = [userPrefix, timestamp, randomPart].filter(part => part);
  return parts.join(useHyphen ? '-' : '');
};
