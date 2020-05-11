import { TypeName } from "./Enums";
import { Serializable } from "./Serializable";
import { Limits } from "./Limits";
import { Altitude } from "./Altitude";
export declare class AltitudeRange implements Serializable {
    readonly type = TypeName.AltitudeRange;
    altitude: Altitude;
    range: Limits;
    constructor(altitude?: Altitude, range?: Limits);
    applyJSON(json: any): void;
    toString(): string;
}
