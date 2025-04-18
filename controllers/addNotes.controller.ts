import type { Response, Request } from "express";
import { addNotesService } from "../services/addNotes.services";

export function addNoteController(req: Request, res: Response) {
    const { name, content, type } = req.body;

    if(!name || !content || !type) {
        res.sendStatus(400) // bad request
        return;
    };

    addNotesService({
        name: name,
        content: content,
        type: type,
    })
};