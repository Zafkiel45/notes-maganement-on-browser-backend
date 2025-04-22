// there is not need for specify the id when invoking the function of createNote. 
// The id property is present with propose of representation to notes on database
export interface NoteRecord {
    id?: number; 
    name: string;
    content: string;
    folder: number; 
};