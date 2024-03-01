import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming, DroneObstacleAvoidanceDirection } from "../../core/Enums";
export declare class ObstacleAvoidanceWarningDistanceDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.ObstacleAvoidanceWarningDistanceDroneCommand;
    warningDistance: number;
    direction: DroneObstacleAvoidanceDirection;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
