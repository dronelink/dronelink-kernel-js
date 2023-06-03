import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming, DroneAuxiliaryLightPosition, DroneAuxiliaryLightMode } from "../../core/Enums";
export declare class AuxiliaryLightModeDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.AuxiliaryLightModeDroneCommand;
    auxiliaryLightPosition: DroneAuxiliaryLightPosition;
    auxiliaryLightMode: DroneAuxiliaryLightMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
