import type { Response, Request } from "express";
import { 
    addNewNotes, 
    getNotesByFolder,
    getNote
} from "../services/notes.services";

export function addNoteController(req: Request, res: Response) {
    const { name, content, folder} = req.body;

    if(!name || !content) {
        res.sendStatus(400);
        return;
    };

    addNewNotes({
        name: name,
        content: content,
        folder: folder,
    });
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