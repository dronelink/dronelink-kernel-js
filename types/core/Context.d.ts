import { Drone } from "./Drone";
import { User } from "./User";
import { GeoSpatialSources } from "./GeoSpatialSources";
import { PlanComponent } from "../component/PlanComponent";
import { Device } from "./Device";
import { Altitude } from "./Altitude";
import { ReferencedAltitude } from "./ReferencedAltitude";
import { GeoLocation } from "./GeoLocation";
export declare class Context {
    plan: PlanComponent;
    user: User;
    device: Device;
    drone: Drone;
    preview: boolean;
    constructor(plan: PlanComponent);
    get spatialSources(): GeoSpatialSources;
    referencedAltitude(altitude: Altitude, groundLocation?: GeoLocation | null, tolerance?: number | null): ReferencedAltitude;
}
