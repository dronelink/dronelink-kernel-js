import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class LandingGearDeployDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.LandingGearDeployDroneCommand;
    applyJSON(json: any): void;
    get reengagementTiming(): CommandReengagementTiming;
}
