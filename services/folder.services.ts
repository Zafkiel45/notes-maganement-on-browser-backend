import { database } from "../database/config/config";

interface FolderSignature {
    name: string;
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
    const folder: FolderSignature | null = query.get({
        folder: folderName
    }) as FolderSignature | null;
    return folder; 
};