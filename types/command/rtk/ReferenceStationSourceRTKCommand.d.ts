import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming, RTKReferenceStationSource } from "../../core/Enums";
import { RTKCommand } from "./RTKCommand";
export declare class ReferenceStationSourceRTKCommand extends RTKCommand implements Serializable {
    readonly type = TypeName.ReferenceStationSourceRTKCommand;
    referenceStationSource: RTKReferenceStationSource;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
