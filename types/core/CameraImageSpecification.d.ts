import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class CameraImageSpecification implements Serializable {
    readonly type = TypeName.CameraImageSpecification;
    width: number;
    height: number;
    applyJSON(json: any): void;
    constructor(width?: number, height?: number);
    toString: () => string;
}
