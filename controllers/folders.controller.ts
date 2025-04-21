import type { Response, Request } from "express";
import { getFoldersByName } from "../services/folder.services";
import { createFolderService } from "../services/folder.services";

export function createFolder(req: Request, res: Response) {
    const { folderName } = req.body;

    if(!String(folderName).trim() || typeof folderName === 'undefined') {
        res.sendStatus(400) // bad request;
        return;
    };
    // check if the folder already exists
    const folder = getFoldersByName(folderName);
   
    if(folder) {
        return res.sendStatus(409); // conflict
    } else {
        createFolderService(folderName);
        res.sendStatus(201); // created
        return;
    };
};