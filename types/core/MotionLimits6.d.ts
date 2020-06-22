import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { MotionLimits } from "./MotionLimits";
import { MotionLimits3, MotionLimits3Formatters } from "./MotionLimits3";
import { MotionLimits6Optional } from "./MotionLimits6Optional";
import { Velocity6 } from "./Velocity6";
import { Vector2 } from "./Vector2";
export declare class MotionLimits6 implements Serializable {
    readonly type = TypeName.MotionLimits6;
    position: MotionLimits3;
    orientation: MotionLimits3;
    applyJSON(json: any): void;
    constructor(position?: MotionLimits3, orientation?: MotionLimits3);
    resolve(limits: MotionLimits6Optional): MotionLimits6;
    interpolate(limits: MotionLimits6, interpolate: (start: number, finish: number) => number): MotionLimits6;
    get horizontal(): MotionLimits;
    set horizontal(x: MotionLimits);
    get vertical(): MotionLimits;
    set vertical(z: MotionLimits);
    get rotational(): MotionLimits;
    set rotational(z: MotionLimits);
    timeLineHorizontal(distance: number, target?: number | null): number;
    timeLineVertical(distance: number, target?: number | null): number;
    timeLineRotational(distance: number, target?: number | null): number;
    boundedVelocity(current: Velocity6, target: Velocity6, time: number): Velocity6;
    updateBoundedVelocityHorizontal(velocity: Velocity6, direction: number, distance: number, reference?: Vector2): void;
    updateBoundedVelocityVertical(velocity: Velocity6, distance: number, reference?: number): void;
    updateBoundedVelocityRotational(velocity: Velocity6, distance: number, reference?: number): void;
    toString: (formatters?: MotionLimits6Formatters) => string;
}
export declare type MotionLimits6Formatters = {
    position: MotionLimits3Formatters;
    orientation: MotionLimits3Formatters;
};
