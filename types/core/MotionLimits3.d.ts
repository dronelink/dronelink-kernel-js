import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { MotionLimits, MotionLimitsFormatters } from "./MotionLimits";
import { MotionLimits3Optional } from "./MotionLimits3Optional";
export declare class MotionLimits3 implements Serializable {
    readonly type = TypeName.MotionLimits3;
    x: MotionLimits;
    y: MotionLimits;
    z: MotionLimits;
    applyJSON(json: any): void;
    constructor(x?: MotionLimits, y?: MotionLimits, z?: MotionLimits);
    resolve(limits: MotionLimits3Optional | null): MotionLimits3;
    asOptional(): MotionLimits3Optional;
    interpolate(limits: MotionLimits3, interpolate: (start: number, finish: number) => number): MotionLimits3;
    get pitch(): MotionLimits;
    set pitch(x: MotionLimits);
    get roll(): MotionLimits;
    set roll(y: MotionLimits);
    get yaw(): MotionLimits;
    set yaw(z: MotionLimits);
    get forwardBackward(): MotionLimits;
    set forwardBackward(x: MotionLimits);
    get leftRight(): MotionLimits;
    set leftRight(y: MotionLimits);
    get upDown(): MotionLimits;
    set upDown(z: MotionLimits);
    toString: (formatters: MotionLimits3Formatters) => string;
}
export declare type MotionLimits3Formatters = {
    x: MotionLimitsFormatters;
    y: MotionLimitsFormatters;
    z: MotionLimitsFormatters;
};
