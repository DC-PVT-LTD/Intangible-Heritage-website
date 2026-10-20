// lib/dataStore.ts — Helper to safely read and write JSON data files
import fs from 'fs';
import path from 'path';

export function readDataFile<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'data', filename);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as T;
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    throw new Error(`Failed to read data file: ${filename}`);
  }
}

export function writeDataFile<T>(filename: string, data: T): void {
  const filePath = path.join(process.cwd(), 'data', filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`Error writing ${filename}:`, err);
    throw new Error(`Failed to write data file: ${filename}`);
  }
}

export function checkAdminAuth(password?: string | null): boolean {
  const expectedPassword = process.env.UPLOAD_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || 'heritage2026';
  return password === expectedPassword;
}
