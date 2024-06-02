import crypto from 'crypto';

export const generateOTP = (length: number = 6): string => {
  const otp = crypto.randomBytes(length).toString('hex').slice(0, length);
  return otp.toUpperCase(); // To ensure the OTP is in a standard format
};

export const verifyOTP = (inputOTP: string, generatedOTP: string): boolean => {
  return inputOTP === generatedOTP;
};
