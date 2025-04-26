import { database } from "../database/config/config";
import type { Note, NoteContent } from "../types/Note";
import type { NoteRecord } from "../database/models/NoteRecord";

export function addNewNotes({ content, name, folder }: NoteRecord) {
  const query = database.prepare(`
        INSERT INTO notes (name, content, folder) VALUES (@name, @content, @folder)
    `);

  const transaction = database.transaction(() => {
    query.run({ name: name, content: content, folder: folder });
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
export function getNote(id: string): string {
  const query = database.prepare(`SELECT content FROM notes WHERE id = @id`);
  const note: Note = query.get({ id: parseInt(id) }) as Note;

  if (!note) return "# The file does not exist";
  return note.content;
}
export async function updateNoteService({ id, content }: NoteContent) {
    try {
      const update = database.prepare(`
        UPDATE notes SET content = @editedNote WHERE id = @noteId
      `);

      const transaction = database.transaction(() => {
        update.run({
          editedNote: content,
          noteId: String(id),
        });
      });

      transaction();
 
    } catch (err) {
      console.error(err);
    }
}
export async function deleteNoteService(id: string) {
  try {
    const deleteQuery = database.prepare(`DELETE FROM notes WHERE id = @id`);
    const transaction = database.transaction(() => {
      deleteQuery.run({
        id: id,
      });
    });
  
    transaction();
  } catch(err) {
    console.error(err);
  };
};
