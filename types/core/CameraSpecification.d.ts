import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Descriptors } from "./Descriptors";
import { CameraImageSpecification } from "./CameraImageSpecification";
import { CameraLensSpecification } from "./CameraLensSpecification";
import { CameraSensorSpecification } from "./CameraSensorSpecification";
import { FieldOfView } from "./FieldOfView";
import { Identifiable } from "./Identifiable";
export declare class CameraSpecification extends Identifiable implements Serializable {
    readonly type = TypeName.CameraSpecification;
    descriptors: Descriptors;
    lens: CameraLensSpecification;
    sensor: CameraSensorSpecification;
    image: CameraImageSpecification;
    applyJSON(json: any): void;
    constructor(id?: string | null, name?: string, lensFocalLength?: number, sensorWidth?: number, sensorHeight?: number, imageWidth?: number, imageHeight?: number);
    get resettable(): boolean;
    get fieldOfView(): FieldOfView;
    groundSampleDistance(distance: number): GroundSampleDistance;
    toString: (image?: boolean) => string;
}
export declare type GroundSampleDistance = {
    width: number;
    height: number;
};
