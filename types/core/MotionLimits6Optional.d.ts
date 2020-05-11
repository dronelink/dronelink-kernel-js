import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { MotionLimitsOptional } from "./MotionLimitsOptional";
import { MotionLimits3Optional } from "./MotionLimits3Optional";
import { MotionLimits6Formatters } from "./MotionLimits6";
export declare class MotionLimits6Optional implements Serializable {
    readonly type = TypeName.MotionLimits6Optional;
    position: MotionLimits3Optional | null;
    orientation: MotionLimits3Optional | null;
    applyJSON(json: any): void;
    constructor(position?: MotionLimits3Optional | null, orientation?: MotionLimits3Optional | null);
    get horizontal(): MotionLimitsOptional | null;
    set horizontal(x: MotionLimitsOptional | null);
    get vertical(): MotionLimitsOptional | null;
    set vertical(z: MotionLimitsOptional | null);
    get rotational(): MotionLimitsOptional | null;
    set rotational(z: MotionLimitsOptional | null);
    toString: (formatters?: MotionLimits6Formatters) => string;
}
