export interface NoteRecord {
    id: number;
    name: string;
    content: Uint8Array;
    folder: number; 
};