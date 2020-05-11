import { GeoSpatialSource, TypeName } from "./Enums";
import { Serializable } from "./Serializable";
import { GeoSpatial } from "./GeoSpatial";
import { Identifiable } from "./Identifiable";
import { GeoSpatialSources } from "./GeoSpatialSources";
export declare class SourcedGeoSpatial extends Identifiable implements Serializable {
    readonly type = TypeName.SourcedGeoSpatial;
    source: GeoSpatialSource;
    input: GeoSpatial | null;
    applyJSON(json: any): void;
    value(sources: GeoSpatialSources): GeoSpatial;
}
