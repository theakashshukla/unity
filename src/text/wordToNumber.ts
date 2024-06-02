export const wordToNumber = (text: string): number[] => {
    const words = text.split(/\s+/);
    return words.map(word => word.length);
  };
  