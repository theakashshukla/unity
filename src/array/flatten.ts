export const flatten = <T>(arr: T[][]): T[] => {
    return arr.reduce((acc, val) => acc.concat(val), []);
  };
  