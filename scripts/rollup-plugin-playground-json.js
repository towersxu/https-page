import fs from 'fs';
import path, { dirname }  from 'path';
import { fileURLToPath } from 'url';
import generatePlaygroundJson from './generate-playground-json.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url));

function copyPlaygroundJson() {
  return new Promise((resolve) => {
    const configPath = path.resolve(__dirname, '../examples/config.json');
    const targetDir = path.resolve(__dirname, '../examples');
    let configJson = fs.readFileSync(configPath, 'utf8');
    console.log(configJson, configPath);
    if (configJson) {
      // fs.writeFileSync('config.json')
      configJson = JSON.parse(configJson);
      const examples = configJson.examples;
      examples.forEach((example) => {
        const exampleJsonPath = path.resolve(targetDir, `${example.key}.playground.json`)
        const jsonObjct = generatePlaygroundJson(example.key)
        fs.writeFileSync(exampleJsonPath, JSON.stringify(jsonObjct));
      });
    }
    resolve()
  })
}

export default function playgroundJson() {
  return {
    name: 'playgroundJson',
    buildStart: async () => {
      await copyPlaygroundJson()
    }
  }
}