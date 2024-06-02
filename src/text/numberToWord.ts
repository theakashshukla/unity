export const numberToWord = (numbers: number[]): string => {
    const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return numbers.map(number => numberWords[number] || number.toString()).join(' ');
  };
  