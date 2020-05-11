import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class Descriptors implements Serializable {
    readonly type = TypeName.Descriptors;
    name: string;
    description: string;
    tags: string[];
    applyJSON(json: any): void;
    constructor(name?: string, description?: string, tags?: string[]);
    toString(): string;
    merge(descriptors: Descriptors): void;
    mergeTags(tags: string[]): void;
    mergeTag(tag: string): void;
}
