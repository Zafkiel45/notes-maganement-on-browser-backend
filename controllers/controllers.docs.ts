import type { Request, Response } from "express";
import { database } from "../database/config/config";

interface docSignature {
    content: Uint8Array[]
}

export function docsController(req: Request, res: Response): void {
    const { id } = req.params;

    if(!id) {
        res.sendStatus(400); // bad request
        return; 
    };
    
    const query = database.prepare(`SELECT content FROM docs WHERE id = @id`);
    const doc: docSignature   = query.get({id: parseInt(id)}) as docSignature;
  
    res.send(doc.content);
};