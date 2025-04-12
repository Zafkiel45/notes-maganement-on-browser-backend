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

/*
  it's necessary compare names from database with local names. The "name" is 
  the "name" of file(markdown file).

  This process is necessary why file's name are unique. So, if I try import
  repeated name on database, an error is triggered. 

  The process is simple: I get the name of files on database and local file names.
  the string is a path(local files), because of this, I must extract the path 
  with the extension of file. 
*/

const fileNames: fileNameType[] = queryFileNames.all() as fileNameType[];
const fileNameArr: string[] = []; // names actually on database
const localFiles: string[] = []; // names that will be to the database

for(let file of files) {
  if(!file.endsWith('.md')) continue; // extract only the paths with extension of file 
  localFiles.push(file);
};
// extract the name of files on database. This is necessary, because the query
// returns an object array with the "name" property.
for (let file of fileNames) fileNameArr.push(file.name);
// comparing the local files with the database files. Any file name that does not 
// present on database, it will be stored, preventing errors. 
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
      type: path.basename(path.dirname(path.join(basePath, file))),
    });

    console.log(path.parse(file).name + ' adicionado com sucesso ✅');
  }
});

await transaction(newFiles);
