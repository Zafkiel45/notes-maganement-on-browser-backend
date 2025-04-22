import { database } from "../database/config/config";

export interface MarkdownNote {
    name: string;
    content: string;
    folder: number;
};
// the markdown on database
interface MarkdownContent {
    content: Uint8Array[];
};
  
export function addNewNotes({
    content,
    name,
    folder,
}: MarkdownNote) {
    const query = database.prepare(`
        INSERT INTO notes (name, content, folder) VALUES (@name, @content, @folder)`
    );
    const transaction = database.transaction(() => {
        query.run({
            name: name, 
            content: content,
            folder: folder 
        })
    });
    transaction();
};
export function getFilesByFolder(folderId: number) {
    const query = database.query("SELECT name,id FROM notes WHERE folder = @folder");
    const typeNotesArr = query.all({ type: folderId });
  
    return JSON.stringify(typeNotesArr);
}
export function getNote(id: string): Uint8Array[] | string {
  const query = database.prepare(`SELECT content FROM notes WHERE id = @id`);

  const fileContent: MarkdownContent = query.get({
    id: parseInt(id),
  }) as MarkdownContent;

  if (!fileContent) return "# The file does not exist";

  return fileContent.content;
}