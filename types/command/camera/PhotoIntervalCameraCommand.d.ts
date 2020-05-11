import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming, CameraMode } from "../../core/Enums";
export declare class PhotoIntervalCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.PhotoIntervalCameraCommand;
    photoInterval: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
