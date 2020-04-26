import { Subject } from 'rxjs';

export interface InputHolder {
    group? : string;
    name? : string;
    demout? : string;
    helpPath?: string;
    showCaseFlag? : string;
    parentClick?: boolean;  
    imagesList?: string;
    indicator?:number;
    output?: string;
}

