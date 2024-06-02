export const isPhoneNumber = (phone: string): boolean => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phone);
  };
  