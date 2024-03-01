import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, DroneObstacleAvoidanceMode, CommandReengagementTiming } from "../../core/Enums";
export declare class ObstacleAvoidanceModeDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.ObstacleAvoidanceModeDroneCommand;
    obstacleAvoidanceMode: DroneObstacleAvoidanceMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
