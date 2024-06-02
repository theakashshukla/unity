export const hexConverter = (text: string): string => 
    text.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
  