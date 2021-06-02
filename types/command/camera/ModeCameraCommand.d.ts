import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraMode, CommandReengagementTiming } from "../../core/Enums";
export declare class ModeCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ModeCameraCommand;
    mode: CameraMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get requiredCapturing(): boolean | null;
}
