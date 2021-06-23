import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { CameraFocusCalibration } from "../../core/CameraFocusCalibration";
export declare class FocusDistanceCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.FocusDistanceCameraCommand;
    focusCalibration: CameraFocusCalibration;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
}
