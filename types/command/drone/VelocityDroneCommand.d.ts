import { Message } from "../../core/Message";
import { DroneCommand } from "./DroneCommand";
import { Velocity6 } from "../../core/Velocity6";
import { Serializable } from "../../core/Serializable";
import { TypeName } from "../../core/Enums";
export declare class VelocityDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.VelocityDroneCommand;
    velocity: Velocity6;
    heading: number | null;
    applyJSON(json: any): void;
    constructor();
    get verifiable(): boolean;
    toMessage(): Message;
}
