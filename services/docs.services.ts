import { database } from "../database/config/config";

interface FileSignature {
  content: Uint8Array[];
}

type foldersSignature = string[];

export function getFileContent(id: string): Uint8Array[] | string {
  const query = database.prepare(`SELECT content FROM docs WHERE id = @id`);

  const fileContent: FileSignature = query.get({
    id: parseInt(id),
  }) as FileSignature;

  if (!fileContent) return "# The file does not exist";

  return fileContent.content;
}

export function getFolders() {
  const query = database.prepare("SELECT type FROM docs");
  const folders = query.all() as foldersSignature;
  const foldersTypes: string[] = [];

  for (let property in folders) {
    foldersTypes.push(folders[property]);
  };

  return JSON.stringify(foldersTypes);
}
