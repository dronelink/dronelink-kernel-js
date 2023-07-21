import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class ZoomPercentCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ZoomPercentCameraCommand;
    zoomPercent: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
