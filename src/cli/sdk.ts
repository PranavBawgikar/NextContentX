import path from 'path';
import fs from 'fs/promises';

const DB_PATH = path.join(process.cwd(), "../../", "epic-nfts");


export interface GetFoldersResult {
    folders:Folders[];
}

export interface Folders {
    absolutePath: string;
    relativepath: string;
    label: string;
}

const transformDashcasetoSentenceCase = (str: string) => {
    return str
        .split("-")
        .map((s) => s[0].toUpperCase() + s.slice(1))
        .join(" ");
} 

export const getFolders = async (): Promise<GetFoldersResult> => {
    const folderToIgnore = ["_old", "node_modules"];

    const folders = (await fs.readdir(DB_PATH)).filter((f) => {
    return !f.includes(".") && !folderToIgnore.includes(f);
});

return {
    folders: folders.map((f) => {
        return{
            absolutePath: path.join(DB_PATH, f),
            relativepath: f,
            label: transformDashcasetoSentenceCase(f)
        };
    }),
};
};