import { Node } from "./Node";
export declare class ListElementNode extends Node {
    readonly index: number;
    readonly typeName: string;
    readonly icaoIndex: boolean;
    constructor(id: string, parent: Node, index: number, typeName: string, icaoIndexDisplay: boolean);
    get title(): string;
    get abbreviation(): string;
}
