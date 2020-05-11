import { Serializable } from "./Serializable";
import { GeoSpatial } from "./GeoSpatial";
import { GeoSpatialSources } from "./GeoSpatialSources";
import { Identifiable } from "./Identifiable";
import { Vector2 } from "./Vector2";
import { SourcedGeoSpatial } from "./SourcedGeoSpatial";
import { TypeName } from "./Enums";
export declare class GeoReferencedOffset extends Identifiable implements Serializable {
    readonly type = TypeName.GeoReferencedOffset;
    reference: SourcedGeoSpatial | null;
    coordinateOffset: Vector2;
    altitudeOffset: number;
    applyJSON(json: any): void;
    value(sources: GeoSpatialSources, defaultReference: SourcedGeoSpatial): GeoSpatial;
}
