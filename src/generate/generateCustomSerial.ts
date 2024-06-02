export const generateCustomSerial = (prefix: string, length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let serial = prefix;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      serial += chars[randomIndex];
    }
    return serial;
  };
  