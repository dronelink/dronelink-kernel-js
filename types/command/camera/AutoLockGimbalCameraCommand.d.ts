import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class AutoLockGimbalCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.AutoLockGimbalCameraCommand;
    enabled: boolean;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
