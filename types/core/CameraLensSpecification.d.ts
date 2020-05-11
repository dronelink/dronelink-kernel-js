import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class CameraLensSpecification implements Serializable {
    readonly type = TypeName.CameraLensSpecification;
    focalLength: number;
    applyJSON(json: any): void;
    constructor(focalLength?: number);
    toString: () => string;
}
