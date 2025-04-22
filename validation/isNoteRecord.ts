export function isNoteRecord(name: any, content: any, folder: any): boolean {
    const typeCheck = 
        typeof name !== 'string' || 
        typeof content !== 'string' || 
        typeof folder !== 'number'
    console.log(typeCheck);

    if(!typeCheck) {return false;} else {return true;}
};