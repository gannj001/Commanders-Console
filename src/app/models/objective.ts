export class Objective {
    Name: string;
    Type?: string;
    ObjectiveList: string[];
    Action?: {
        Name: string,
        Action: string
    }
    ObjectiveTable?: {
        Path?:string
        Headings?: string[],
        Rows?: string[]
    }
}
