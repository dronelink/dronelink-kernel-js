import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, DroneOcuSyncChannelSelectionMode, CommandReengagementTiming } from "../../core/Enums";
export declare class OcuSyncChannelSelectionModeDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.OcuSyncChannelSelectionModeDroneCommand;
    ocuSyncChannelSelectionMode: DroneOcuSyncChannelSelectionMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
