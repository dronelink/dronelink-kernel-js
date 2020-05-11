import { Altitude } from "./Altitude";
import { GeoLocation } from "./GeoLocation";
import { AltitudeSystem } from "./Enums";
export declare class ReferencedAltitude {
    altitude: Altitude;
    takeoffLocation: GeoLocation | null;
    groundLocation: GeoLocation | null;
    constructor(altitude: Altitude, takeoffLocation: GeoLocation | null, groundLocation: GeoLocation | null);
    toSystem(system: AltitudeSystem): Altitude | null;
}
