import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraMode, CameraPhotoMode } from "../../core/Enums";
export declare class StartCaptureCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.StartCaptureCameraCommand;
    verifyFileCreated: boolean;
    applyJSON(json: any): void;
    static possible(mode: CameraMode): boolean;
    static continuous(mode: CameraMode, photoMode: CameraPhotoMode): boolean;
    constructor(verifyFileCreated?: boolean);
    get estimatedTime(): number;
    get verifiable(): boolean;
}
