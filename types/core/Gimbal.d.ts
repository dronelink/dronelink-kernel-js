import { Payload } from "./Payload";
import { Serializable } from "./Serializable";
import { TypeName, GimbalMode } from "./Enums";
import { Velocity3 } from "./Velocity3";
import { Orientation3 } from "./Orientation3";
import { Datetime } from "./Datetime";
export declare class Gimbal extends Payload implements Serializable {
    readonly type = TypeName.Gimbal;
    updated: Datetime;
    settings: {
        mode: GimbalMode;
    };
    orientation: Orientation3;
    velocity: Velocity3;
    applyJSON(json: any): void;
    projectOrientation(elapsedTime: number): Orientation3;
    static pitch(distance: number, altitude: number): number;
}
