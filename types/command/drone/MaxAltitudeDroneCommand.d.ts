import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class MaxAltitudeDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.MaxAltitudeDroneCommand;
    maxAltitude: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
