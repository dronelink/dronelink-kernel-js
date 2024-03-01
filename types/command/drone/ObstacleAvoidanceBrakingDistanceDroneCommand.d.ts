import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming, DroneObstacleAvoidanceDirection } from "../../core/Enums";
export declare class ObstacleAvoidanceBrakingDistanceDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.ObstacleAvoidanceBrakingDistanceDroneCommand;
    brakingDistance: number;
    direction: DroneObstacleAvoidanceDirection;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
