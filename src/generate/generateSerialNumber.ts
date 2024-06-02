export const generateSerialNumber = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let serial = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      serial += chars[randomIndex];
    }
    return serial;
  };
  