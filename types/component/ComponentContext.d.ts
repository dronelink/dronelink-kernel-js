import { PlanComponent } from "../component/PlanComponent";
import { Altitude } from "../core/Altitude";
import { Context } from "../core/Context";
import { GeoLocation } from "../core/GeoLocation";
import { GeoSpatialSources } from "../core/GeoSpatialSources";
import { ReferencedAltitude } from "../core/ReferencedAltitude";
export declare class ComponentContext extends Context {
    plan: PlanComponent;
    constructor(plan: PlanComponent);
    get spatialSources(): GeoSpatialSources;
    referencedAltitude(altitude: Altitude, groundLocation?: GeoLocation | null, tolerance?: number | null): ReferencedAltitude;
}
