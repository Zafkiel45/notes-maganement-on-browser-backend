import type { Response, Request } from "express";
import { 
    getFoldersByName, 
    createFolderService,
    getFoldersService,
} from "../services/folder.services";


export function createFolder(req: Request, res: Response) {
    const { folderName } = req.body;

    if(!String(folderName).trim() || typeof folderName !== 'string') {
        res.sendStatus(400) // bad request;
        return;
    };
    // check if the folder already exists
    const folder = getFoldersByName(folderName);
   
    if(folder) {
        res.sendStatus(409); // conflict
        return;
    } else {
        createFolderService(folderName);
        res.sendStatus(201); // created
        return;
    };
};
export function getFoldersController(req: Request, res: Response) {
    const folders = getFoldersService();
    res.send(folders); // ok 
};