import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraPhotoMode, CommandReengagementTiming, CameraMode } from "../../core/Enums";
export declare class PhotoModeCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.PhotoModeCameraCommand;
    photoMode: CameraPhotoMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
