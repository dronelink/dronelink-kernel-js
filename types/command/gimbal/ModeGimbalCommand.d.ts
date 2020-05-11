import { GimbalCommand } from "./GimbalCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, GimbalMode, CommandReengagementTiming } from "../../core/Enums";
export declare class ModeGimbalCommand extends GimbalCommand implements Serializable {
    readonly type = TypeName.ModeGimbalCommand;
    mode: GimbalMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
