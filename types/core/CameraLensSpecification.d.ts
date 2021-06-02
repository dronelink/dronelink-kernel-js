import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class CameraLensSpecification implements Serializable {
    readonly type = TypeName.CameraLensSpecification;
    focalLength: number;
    features: {
        focusMode: boolean;
    };
    applyJSON(json: any): void;
    constructor(focalLength?: number, featureFocusMode?: boolean);
    toString: () => string;
}
