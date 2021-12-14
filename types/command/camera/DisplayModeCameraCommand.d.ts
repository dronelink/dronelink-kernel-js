import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraDisplayMode, CommandReengagementTiming } from "../../core/Enums";
export declare class DisplayModeCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.DisplayModeCameraCommand;
    displayMode: CameraDisplayMode;
    lensIndex: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
