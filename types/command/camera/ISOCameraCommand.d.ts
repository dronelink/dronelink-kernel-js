import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraISO, CommandReengagementTiming } from "../../core/Enums";
export declare class ISOCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ISOCameraCommand;
    iso: CameraISO;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
}
