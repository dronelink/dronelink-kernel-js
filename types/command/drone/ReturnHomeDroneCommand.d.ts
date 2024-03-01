import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class ReturnHomeDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.ReturnHomeDroneCommand;
    applyJSON(json: any): void;
    get reengagementTiming(): CommandReengagementTiming;
}
