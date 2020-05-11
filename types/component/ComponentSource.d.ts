import { TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { Datetime } from "../core/Datetime";
export declare class ComponentSource implements Serializable {
    readonly type = TypeName.ComponentSource;
    updated: Datetime;
    path: string;
    applyJSON(json: any): void;
    constructor(path?: string, updated?: Datetime);
}
