import { GimbalCommand } from "./GimbalCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class YawSimultaneousFollowGimbalCommand extends GimbalCommand implements Serializable {
    readonly type = TypeName.YawSimultaneousFollowGimbalCommand;
    enabled: boolean;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
