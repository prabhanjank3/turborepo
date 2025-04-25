import fs from 'fs';
import path from 'path';

export const listDirectories = (basePath: string) => {
  return fs
    .readdirSync(basePath)
    .filter((file) => fs.statSync(path.join(basePath, file)).isDirectory());
};

export const openCurlyHelper = () => {
  return '{';
};

export const closeCurlyHelper = () => {
  return '}';
};
