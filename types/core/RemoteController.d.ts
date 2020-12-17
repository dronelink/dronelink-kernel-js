import { Identifiable } from "./Identifiable";
import { TypeName } from "./Enums";
import { Serializable } from "./Serializable";
import { Datetime } from "./Datetime";
export declare class RemoteController extends Identifiable implements Serializable {
    readonly type = TypeName.RemoteController;
    channel: number;
    updated: Datetime;
    leftStick: RemoteControllerStick;
    leftWheel: RemoteControllerWheel;
    rightStick: RemoteControllerStick;
    pauseButton: RemoteControllerButton;
    c1Button: RemoteControllerButton;
    c2Button: RemoteControllerButton;
    applyJSON(json: any): void;
    constructor(channel?: number);
}
export declare class RemoteControllerStick implements Serializable {
    readonly type = TypeName.RemoteControllerStick;
    x: number;
    y: number;
    applyJSON(json: any): void;
    constructor(x?: number, y?: number);
}
export declare class RemoteControllerButton implements Serializable {
    readonly type = TypeName.RemoteControllerButton;
    present: boolean;
    pressed: boolean;
    applyJSON(json: any): void;
    constructor(present?: boolean, pressed?: boolean);
}
export declare class RemoteControllerWheel implements Serializable {
    readonly type = TypeName.RemoteControllerWheel;
    present: boolean;
    pressed: boolean;
    value: number;
    applyJSON(json: any): void;
    constructor(present?: boolean, pressed?: boolean, value?: number);
}
