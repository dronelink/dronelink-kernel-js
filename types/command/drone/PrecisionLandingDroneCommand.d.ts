import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class PrecisionLandingDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.PrecisionLandingDroneCommand;
    enabled: boolean;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
