import { promises as fs } from 'fs';

export const readFile = async (path: string): Promise<string> => {
  return await fs.readFile(path, 'utf-8');
};
