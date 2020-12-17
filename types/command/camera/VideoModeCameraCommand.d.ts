import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraVideoMode, CommandReengagementTiming, CameraMode } from "../../core/Enums";
export declare class VideoModeCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.VideoModeCameraCommand;
    videoMode: CameraVideoMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
    get reengagementReplaceable(): boolean;
}
