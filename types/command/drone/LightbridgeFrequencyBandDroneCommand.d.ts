import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, DroneLightbridgeFrequencyBand, CommandReengagementTiming } from "../../core/Enums";
export declare class LightbridgeFrequencyBandDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.LightbridgeFrequencyBandDroneCommand;
    lightbridgeFrequencyBand: DroneLightbridgeFrequencyBand;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
