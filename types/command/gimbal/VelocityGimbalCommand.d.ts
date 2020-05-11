import { Message } from "../../core/Message";
import { Serializable } from "../../core/Serializable";
import { TypeName } from "../../core/Enums";
import { GimbalCommand } from "./GimbalCommand";
import { Velocity3 } from "../../core/Velocity3";
import { MotionLimits3 } from "../../core/MotionLimits3";
export declare class VelocityGimbalCommand extends GimbalCommand implements Serializable {
    readonly type = TypeName.VelocityGimbalCommand;
    velocity: Velocity3;
    applyJSON(json: any): void;
    constructor();
    get verifiable(): boolean;
    toMessage(): Message;
    static boundedVelocity(current: Velocity3, target: Velocity3, time: number, limits: MotionLimits3): Velocity3;
}
