import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, DroneLightbridgeChannelSelectionMode, CommandReengagementTiming } from "../../core/Enums";
export declare class LightbridgeChannelSelectionModeDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.LightbridgeChannelSelectionModeDroneCommand;
    lightbridgeChannelSelectionMode: DroneLightbridgeChannelSelectionMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
