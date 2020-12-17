import { DroneCommand } from "./DroneCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName } from "../../core/Enums";
import { RemoteControllerStick } from "../../core/RemoteController";
import { Message } from "../../core/Message";
export declare class RemoteControllerSticksDroneCommand extends DroneCommand implements Serializable {
    readonly type = TypeName.RemoteControllerSticksDroneCommand;
    channel: number;
    leftStick: RemoteControllerStick;
    rightStick: RemoteControllerStick;
    heading: number | null;
    applyJSON(json: any): void;
    constructor(channel?: number);
    get verifiable(): boolean;
    toMessage(): Message;
}
