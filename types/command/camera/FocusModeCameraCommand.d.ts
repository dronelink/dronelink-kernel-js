import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraFocusMode, CommandReengagementTiming } from "../../core/Enums";
export declare class FocusModeCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.FocusModeCameraCommand;
    focusMode: CameraFocusMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
