import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraPhotoAspectRatio, CommandReengagementTiming, CameraMode } from "../../core/Enums";
export declare class PhotoAspectRatioCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.PhotoAspectRatioCameraCommand;
    photoAspectRatio: CameraPhotoAspectRatio;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
