import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class LandingGearRetractDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.LandingGearRetractDroneCommand;
    applyJSON(json: any): void;
    get reengagementTiming(): CommandReengagementTiming;
}
