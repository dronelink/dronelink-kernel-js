import { Identifiable } from "./Identifiable";
import { GeoSpatial } from "./GeoSpatial";
import { TypeName } from "./Enums";
import { Serializable } from "./Serializable";
import { Datetime } from "./Datetime";
export declare class Device extends Identifiable implements Serializable {
    readonly type = TypeName.Device;
    spatial: GeoSpatial;
    os: String | null;
    model: String | null;
    applyJSON(json: any): void;
    projectSpatial(datetime: Datetime, additionalMillis?: number): GeoSpatial;
    get gpsAvailable(): Boolean;
}
