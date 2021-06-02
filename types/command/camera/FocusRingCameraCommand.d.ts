import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class FocusRingCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.FocusRingCameraCommand;
    focusRingPercent: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
}
