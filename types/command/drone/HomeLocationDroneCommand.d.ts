import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { GeoCoordinate } from "../../core/GeoCoordinate";
export declare class HomeLocationDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.HomeLocationDroneCommand;
    coordinate: GeoCoordinate;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
