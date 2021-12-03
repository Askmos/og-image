export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';

export interface ParsedRequest {
    fileType: FileType;
    fontSize: string;
    award: string
    colors: {
        primary: string,
        secondary: string,
        primaryText: string,
        secondaryText: string,
      },
}
