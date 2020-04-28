export interface Demo {
    id?:string;
    group: string;
    name: string;
    snips?: [];
    outputs?: [];
    helpPath?: string;
    indicator?:number;
    accepted?:boolean;
}
