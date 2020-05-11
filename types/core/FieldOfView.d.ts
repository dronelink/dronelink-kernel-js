import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class FieldOfView implements Serializable {
    readonly type = TypeName.FieldOfView;
    horizontal: number;
    vertical: number;
    diagonal: number;
    constructor(horizontal?: number, vertical?: number, diagonal?: number);
    applyJSON(json: any): void;
}
