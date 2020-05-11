import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class CameraSensorSpecification implements Serializable {
    readonly type = TypeName.CameraSensorSpecification;
    width: number;
    height: number;
    applyJSON(json: any): void;
    constructor(width?: number, height?: number);
    toString: () => string;
}
