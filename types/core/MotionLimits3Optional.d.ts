import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { MotionLimitsOptional } from "./MotionLimitsOptional";
import { MotionLimits3Formatters } from "./MotionLimits3";
import { MotionLimits3 } from "..";
export declare class MotionLimits3Optional implements Serializable {
    readonly type = TypeName.MotionLimits3Optional;
    x: MotionLimitsOptional | null;
    y: MotionLimitsOptional | null;
    z: MotionLimitsOptional | null;
    applyJSON(json: any): void;
    constructor(x?: MotionLimitsOptional | null, y?: MotionLimitsOptional | null, z?: MotionLimitsOptional | null);
    get pitch(): MotionLimitsOptional | null;
    set pitch(x: MotionLimitsOptional | null);
    get roll(): MotionLimitsOptional | null;
    set roll(y: MotionLimitsOptional | null);
    get yaw(): MotionLimitsOptional | null;
    set yaw(z: MotionLimitsOptional | null);
    get forwardBackward(): MotionLimitsOptional | null;
    set forwardBackward(x: MotionLimitsOptional | null);
    get leftRight(): MotionLimitsOptional | null;
    set leftRight(y: MotionLimitsOptional | null);
    get upDown(): MotionLimitsOptional | null;
    set upDown(z: MotionLimitsOptional | null);
    toString: (formatters: MotionLimits3Formatters) => string;
    apply(motionLimits: MotionLimits3): MotionLimits3Optional;
}
