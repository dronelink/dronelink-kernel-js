import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { RTKCommand } from "./RTKCommand";
export declare class MaintainAccuracyRTKCommand extends RTKCommand implements Serializable {
    readonly type = TypeName.MaintainAccuracyRTKCommand;
    enabled: boolean;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
