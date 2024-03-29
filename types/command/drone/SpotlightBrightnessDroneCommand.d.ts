import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class SpotlightBrightnessDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.SpotlightBrightnessDroneCommand;
    spotlightBrightness: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
