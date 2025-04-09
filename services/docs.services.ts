import path from "node:path";
import { database } from "../database/config/config";
import { getDirname } from "../utils/getDirname";
import { readdir } from "node:fs/promises";

const basePath = path.join("D:", "mdx-files");

interface FileSignature {
  content: Uint8Array[];
}

const files = await readdir(basePath, {
  recursive: true,
});

export function getFileContent(id: string): Uint8Array[] | string {
  const query = database.prepare(`SELECT content FROM docs WHERE id = @id`);

  const fileContent: FileSignature = query.get({
    id: parseInt(id),
  }) as FileSignature;

  if (!fileContent) return "# The file does not exist";

  return fileContent.content;
}

export function getFolders() {
  return JSON.stringify(getDirname(files));
}

export function getFilesByType(type: string) {
  const query = database.query('SELECT name,id FROM docs WHERE type = @type');
  const typeNotesArr = query.all({type: type});
  
  return JSON.stringify(typeNotesArr);
};
