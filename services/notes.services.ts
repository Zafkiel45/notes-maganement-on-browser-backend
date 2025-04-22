import { database } from "../database/config/config";
import type { NoteContent, NoteSummary } from "../types/Note";
import type { NoteRecord } from "../database/models/NoteRecord";

export type MarkdownNote = {
  name: string;
  content: string;
  folder: number;
};
// the markdown on database
type MarkdownContent = {
  content: Uint8Array[];
};

export function addNewNotes({ content, name, folder }: NoteRecord) {
  const query = database.prepare(`
        INSERT INTO notes (name, content, folder) VALUES (@name, @content, @folder)`);

  const transaction = database.transaction(() => {
    query.run({
      name: name,
      content: content,
      folder: folder,
    });
  });
  transaction();
}
export function getNotesByFolder(folderId: number) {
  const query = database.query(
    "SELECT name,id FROM notes WHERE folder = @folder"
  );
  const notesArr = query.all({ folder: folderId });
  return JSON.stringify(notesArr);
}
export function getNote(id: string): Uint8Array[] | string {
  const query = database.prepare(`SELECT content FROM notes WHERE id = @id`);

  const fileContent: MarkdownContent = query.get({
    id: parseInt(id),
  }) as MarkdownContent;

  if (!fileContent) return "# The file does not exist";

  return fileContent.content;
}
