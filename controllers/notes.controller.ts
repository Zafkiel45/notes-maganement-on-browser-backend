import type { Response, Request } from "express";
import type { NoteRecord } from "../database/models/NoteRecord";
import { isNoteRecord } from "../validation/isNoteRecord";
import { 
    addNewNotes,
    getNotesByFolder,
    getNote,
    updateNoteService,
} from "../services/notes.services";

export function createNoteController(req: Request, res: Response) {
    const { name, content, folder } = req.body;
    if(isNoteRecord(name, content, folder)) {res.sendStatus(422); return;};
    const record: NoteRecord = {name: name,content: content,folder: folder}
    addNewNotes(record);
};

export function getfolderByIdController(req: Request, res: Response) {
    try {
        const { folder } = req.params;
        const folderId = parseInt(folder);

        if (!folderId || folderId <= 0 || typeof folderId !== 'number') {
            res.sendStatus(422); 
            return;
        };

        res.send(getNotesByFolder(folderId));
        return; 
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
        return;
    }; 
};

export function getNoteController(req: Request, res: Response): void {
    try {
        const { id } = req.params;

        if (!id || typeof id !== 'string') {res.sendStatus(422); return;};

        const content = getNote(id);
        res.send(content);
        return;
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
        return;
    };
};

export async function updateNoteController(req: Request, res: Response): Promise<void> {
  const { id, content } = req.body;
  const isValidate = typeof id !== 'undefined' && typeof content !== 'undefined';

  if(!isValidate) {
    res.sendStatus(422);
    return;
  };

  await updateNoteService({id, content});
};