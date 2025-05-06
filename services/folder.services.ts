import { database } from "../database/config/config";

export interface FolderSignature {
    name: string;
    folder_id: number;
};

export function createFolderService(folderName: string) {
    const query = database.prepare('INSERT INTO folders (name) VALUES (@folder)');
    const transaction = database.transaction(() => {
        query.run({
            folder: folderName,
        });
    });

    transaction();
};

export function getFoldersByName(folderName: string): FolderSignature | null {
    const query = database.query(`SELECT name FROM folders WHERE name = @folder`);
    // returns Null in case the folder does not exist 
    const folder = query.get({
        folder: folderName
    }) as FolderSignature

    return folder; 
};
export function getFoldersService() {
    const query = database.query('SELECT name, folder_id FROM folders');
    const foldersObject: FolderSignature[] = query.all() as FolderSignature[];

    return foldersObject;
};
