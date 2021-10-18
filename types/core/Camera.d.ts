import { Payload } from "./Payload";
import { Serializable } from "./Serializable";
import { TypeName, CameraMode, CameraPhotoMode, CameraPhotoFileFormat, CameraVideoFileFormat, CameraVideoMode } from "./Enums";
import { Datetime } from "./Datetime";
import { CameraSpecification } from "./CameraSpecification";
export declare class Camera extends Payload implements Serializable {
    readonly type = TypeName.Camera;
    model: string | null;
    lensDetails: string | null;
    updated: Datetime;
    capturing: boolean;
    settings: {
        mode: CameraMode;
        photoMode: CameraPhotoMode;
        photoFileFormat: CameraPhotoFileFormat;
        photoInterval: number;
        videoMode: CameraVideoMode;
        videoFileFormat: CameraVideoFileFormat;
    };
    customSpecification: CameraSpecification | null;
    applyJSON(json: any): void;
    set specification(specification: CameraSpecification | null);
    get specification(): CameraSpecification | null;
}
