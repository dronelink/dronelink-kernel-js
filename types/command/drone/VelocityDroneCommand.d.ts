import { Message } from "../../core/Message";
import { DroneCommand } from "./DroneCommand";
import { Velocity6 } from "../../core/Velocity6";
import { MotionLimits6 } from "../../core/MotionLimits6";
import { Vector2 } from "../../core/Vector2";
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
    static boundedVelocity(current: Velocity6, target: Velocity6, time: number, limits: MotionLimits6): Velocity6;
    static updateBoundedVelocityHorizontal(velocity: Velocity6, direction: number, distance: number, limits: MotionLimits6, reference?: Vector2): void;
    static updateBoundedVelocityVertical(velocity: Velocity6, distance: number, limits: MotionLimits6, reference?: number): void;
    static updateBoundedVelocityRotational(velocity: Velocity6, distance: number, limits: MotionLimits6, reference?: number): void;
}
