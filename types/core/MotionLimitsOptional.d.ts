import { Limits, LimitFormatter } from "./Limits";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { MotionLimits } from "..";
export declare class MotionLimitsOptional implements Serializable {
    readonly type = TypeName.MotionLimitsOptional;
    velocity: Limits | null;
    acceleration: Limits | null;
    applyJSON(json: any): void;
    constructor(velocity?: Limits | null, acceleration?: Limits | null);
    toString: (format: {
        velocity: LimitFormatter | null;
        acceleration: LimitFormatter | null;
    }) => string;
    apply(motionLimits: MotionLimits): MotionLimitsOptional;
}
