import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, DroneConnectionFailSafeBehavior, CommandReengagementTiming } from "../../core/Enums";
export declare class ConnectionFailSafeBehaviorDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.ConnectionFailSafeBehaviorDroneCommand;
    connectionFailSafeBehavior: DroneConnectionFailSafeBehavior;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
