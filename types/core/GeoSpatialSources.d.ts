import { GeoSpatial } from "./GeoSpatial";
import { GeoSpatialSource } from "./Enums";
export declare class GeoSpatialSources {
    plan: GeoSpatial;
    drone: GeoSpatial;
    device: GeoSpatial | null;
    constructor(plan: GeoSpatial, drone: GeoSpatial, device: GeoSpatial | null);
    value(source: GeoSpatialSource, input?: GeoSpatial | null): GeoSpatial;
}
