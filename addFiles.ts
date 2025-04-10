import 'dotenv/config';
import { readdir } from "node:fs/promises";
import { database } from "./database/config/config";
import path from "node:path";
import { getDirname } from "./utils/getDirname";

interface fileNameType {
  name: string;
}

const basePath = path.join(process.env.UNITY_PATH as string, process.env.PATH_MDX as string);

const files = await readdir(basePath, {
  recursive: true,
});

const query = database.prepare(`
  INSERT INTO docs (name, content, type) VALUES ($name, $content, $type)
`);

const queryFileNames = database.query(`SELECT name FROM docs`);
const fileNames: fileNameType[] = queryFileNames.all() as fileNameType[];
const fileNameArr: string[] = [];
const localFiles: string[] = [];

for(let file of files) {
  if(!file.endsWith('.mdx')) continue;
  localFiles.push(file);
};

for (let file of fileNames) fileNameArr.push(file.name);

const newFiles: string[] = localFiles.filter((item) => {
  return !fileNameArr.includes(path.parse(item).name);
});

const transaction = database.transaction(async (files) => {
  for (let file of files) {
    const currentFile = Bun.file(path.join(basePath, file));
    const arrayBuffer = await currentFile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    query.run({
      name: path.parse(file).name,
      content: buffer,
      type: getDirname(localFiles)[-1 + 1],
    });

    console.log(path.parse(file).name + ' added successfully ✔');
  }
});

await transaction(newFiles);
