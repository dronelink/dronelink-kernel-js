import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, VideoFeedSource, CommandReengagementTiming } from "../../core/Enums";
import { Dictionary } from "../../core/Dictionary";
export declare class OcuSyncVideoFeedSourcesDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.OcuSyncVideoFeedSourcesDroneCommand;
    ocuSyncVideoFeedSources: Dictionary<VideoFeedSource>;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
