import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Datetime } from "./Datetime";
import { Identifiable } from "./Identifiable";
import { GeoCoordinate } from "./GeoCoordinate";
import { Altitude } from "./Altitude";
import { Orientation3 } from "./Orientation3";
export declare class CameraFile extends Identifiable implements Serializable {
    readonly type = TypeName.CameraFile;
    name: string;
    size: number;
    created: Datetime;
    metadata: string | null;
    coordinate: GeoCoordinate | null;
    altitude: Altitude | null;
    orientation: Orientation3 | null;
    applyJSON(json: any): void;
    constructor(name?: string, size?: number, created?: Datetime, metadata?: string | null, coordinate?: GeoCoordinate | null, altitude?: Altitude | null, orientation?: Orientation3 | null);
}
