import type { Response, Request } from "express";
import { 
    addNewNotes, 
    getFilesByFolder,
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

export function folderIdController(req: Request, res: Response) {
    try {
        const { folder } = req.params;
        const folderId = parseInt(folder);
        
        if (!folder) {
          res.sendStatus(400);
          return;
        };
      
        res.send(getFilesByFolder(folderId));
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }; 
};

export function getNoteController(req: Request, res: Response): void {
    try {
        const { id } = req.params;

        if (!id) {res.sendStatus(400); return;};

        const content = getNote(id);
      
        res.send(content);
    } catch (err) {
        console.error(err);
    };
};