import { Limits, LimitFormatter } from "./Limits";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { MotionLimitsOptional } from "./MotionLimitsOptional";
export declare class MotionLimits implements Serializable {
    readonly type = TypeName.MotionLimits;
    velocity: Limits;
    acceleration: Limits;
    applyJSON(json: any): void;
    constructor(velocity?: Limits, acceleration?: Limits);
    currentVelocityLimits(currentVelocity: number, time: number): Limits;
    resolve(limits: MotionLimitsOptional | null): MotionLimits;
    interpolate(limits: MotionLimits, interpolate: (start: number, finish: number) => number): MotionLimits;
    toString: (formatters: MotionLimitsFormatters) => string;
}
export declare type MotionLimitsFormatters = {
    velocity: LimitFormatter | null;
    acceleration: LimitFormatter | null;
};
