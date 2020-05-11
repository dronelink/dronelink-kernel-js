import { Altitude } from "./Altitude";
import { Orientation3 } from "./Orientation3";
import { GeoCoordinate } from "./GeoCoordinate";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Datetime } from "./Datetime";
import { Velocity6 } from "./Velocity6";
import { FieldOfView } from "./FieldOfView";
import { OrientationReferenceSources } from "./OrientationReferenceSources";
import { OrientationReferenceTargets } from "./OrientationReferenceTargets";
export declare class GeoSpatial implements Serializable {
    readonly type = TypeName.GeoSpatial;
    updated: Datetime;
    coordinate: GeoCoordinate;
    altitude: Altitude;
    orientation: Orientation3;
    velocity: Velocity6;
    applyJSON(json: any): void;
    applyVelocity(time: number): void;
    interpolate(spatial: GeoSpatial, referenceSources: OrientationReferenceSources, referenceTargets: OrientationReferenceTargets, interpolate: (start: number, finish: number) => number): GeoSpatial;
    projectCoordinate(time: number): GeoCoordinate;
    projectAltitude(time: number): Altitude;
    projectOrientation(time: number): Orientation3;
    distance(to: GeoSpatial): number;
    groundCoordinate(pitch: number, yawOffset?: number, maxPitch?: number): GeoCoordinate;
    groundCoordinates(fieldOfView: FieldOfView, pitch: number, maxPitch?: number): GeoCoordinate[];
}
