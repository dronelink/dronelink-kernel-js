import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { Point2 } from "../../core/Point2";
import { Limits } from "../../core/Limits";
export declare class FocusCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.FocusCameraCommand;
    focusTarget: Point2;
    focusRingPercentLimits: Limits | null;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
}
