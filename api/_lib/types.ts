export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';

export interface ParsedRequest {
    fileType: FileType;
    fontSize: string;
    award: string
    colors: {
        primaryColor: string,
        secondaryColor: string,
        textColor: string,
    }
}
