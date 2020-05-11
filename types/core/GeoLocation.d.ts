import { Altitude } from "./Altitude";
import { GeoCoordinate } from "./GeoCoordinate";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { GeoSpatial } from "./GeoSpatial";
export declare class GeoLocation implements Serializable {
    readonly type = TypeName.GeoLocation;
    coordinate: GeoCoordinate;
    altitude: Altitude;
    applyJSON(json: any): void;
    constructor(coordinate?: GeoCoordinate, altitude?: Altitude);
    toGeoSpatial(): GeoSpatial;
}
