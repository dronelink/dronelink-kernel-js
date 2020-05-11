import { AltitudeSystem, TypeName } from "./Enums";
import { Serializable } from "./Serializable";
export declare class Altitude implements Serializable {
    readonly type = TypeName.Altitude;
    value: number;
    system: AltitudeSystem;
    applyJSON(json: any): void;
    constructor(value?: number, system?: AltitudeSystem);
    interpolate(altitude: Altitude, interpolate: (start: number, finish: number) => number): Altitude;
    toString(): string;
}
