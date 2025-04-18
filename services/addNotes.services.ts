import { database } from "../database/config/config";

export interface MarkdownNote {
    name: string;
    content: string;
    type: string;
};

export function addNotesService({
    content,
    name,
    type,
}: MarkdownNote) {
    const query = database.prepare(`
        INSERT INTO docs (name, content, type) VALUES ($name, $content, $type)`
    );
    const transaction = database.transaction(() => {
        query.run({
            name: name, 
            content: content,
            type: type,
        })
    });

    transaction();
};