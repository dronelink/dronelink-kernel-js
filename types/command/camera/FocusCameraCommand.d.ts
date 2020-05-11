import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { Point2 } from "../../core/Point2";
export declare class FocusCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.FocusCameraCommand;
    focusTarget: Point2;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
