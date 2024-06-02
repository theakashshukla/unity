export const formatTime = (date: Date, format: '12-hour' | '24-hour' = '24-hour'): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    if (format === '12-hour') {
      const twelveHour = hours % 12 || 12;
      return `${twelveHour}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    } else {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  };
  