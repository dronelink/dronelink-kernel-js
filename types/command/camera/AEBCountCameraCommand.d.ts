import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming, CameraAEBCount } from "../../core/Enums";
export declare class AEBCountCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.AEBCountCameraCommand;
    aebCount: CameraAEBCount;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
}
