import path, { dirname }  from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default function generatePlaygroundJson(name) {
  const playgroundPath = path.resolve(
    __dirname,
    '../examples',
    name
  );

  const files = fs.readdirSync(playgroundPath);

  const jsonFiles = {}

  files.forEach((file) => {
    const filePath = path.resolve(__dirname, playgroundPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    jsonFiles[file] = {
      content
    };
  });
  const jsonObject = {
    files: jsonFiles
  }
  return jsonObject;
}
