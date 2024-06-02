import { promises as fs } from 'fs';

export const writeFile = async (path: string, data: string): Promise<void> => {
  await fs.writeFile(path, data, 'utf-8');
};
