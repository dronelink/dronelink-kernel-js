import { Payload } from "./Payload";
import { Serializable } from "./Serializable";
import { TypeName, CameraMode, CameraPhotoMode, CameraPhotoFileFormat, CameraVideoFileFormat } from "./Enums";
import { Datetime } from "./Datetime";
import { CameraSpecification } from "./CameraSpecification";
export declare class Camera extends Payload implements Serializable {
    readonly type = TypeName.Camera;
    model: string | null;
    updated: Datetime;
    capturing: boolean;
    settings: {
        mode: CameraMode;
        photoMode: CameraPhotoMode;
        photoFileFormat: CameraPhotoFileFormat;
        photoInterval: number;
        videoFileFormat: CameraVideoFileFormat;
    };
    applyJSON(json: any): void;
    get specification(): CameraSpecification | null;
}
