const units: [string, number][] = [
    ['y', 31536000],
    ['m', 2592000],
    ['w', 604800],
    ['d', 86400],
    ['h', 3600],
    ['m', 60],
    ['s', 1],
  ];
  
  export const relativeTime = (timestamp: Date | number): string => {
    const now = Date.now();
    const targetTime = timestamp instanceof Date ? timestamp.getTime() : timestamp;
    const elapsed = Math.floor((now - targetTime) / 1000);
  
    for (const [unit, seconds] of units) {
      const interval = Math.floor(elapsed / seconds);
      if (interval >= 1) {
        return `${interval}${unit} ago`;
      }
    }
  
    return 'just now';
  };
  