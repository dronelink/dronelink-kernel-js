import { Identifiable } from "./Identifiable";
import { Serializable } from "./Serializable";
import { TypeName, ZoneShape, ZoneMotionPriority } from "./Enums";
import { Altitude } from "./Altitude";
import { GeoCoordinate } from "./GeoCoordinate";
import { SourcedGeoSpatial } from "./SourcedGeoSpatial";
import { Context } from "./Context";
import { Line2 } from "./Line2";
import { Vector2 } from "./Vector2";
import { ZoneBoundaryPoint } from "./ZoneBoundaryPoint";
import { GeoSpatial } from "./GeoSpatial";
export declare class Zone extends Identifiable implements Serializable {
    readonly type = TypeName.Zone;
    reference: SourcedGeoSpatial;
    shape: ZoneShape;
    motionPriority: ZoneMotionPriority;
    minAltitude: Altitude;
    maxAltitude: Altitude;
    minHorizontalExitAltitude: Altitude | null;
    boundaryPoints: ZoneBoundaryPoint[];
    applyJSON(json: any): void;
    referenceSpatial(context: Context): GeoSpatial;
    referenceCoordinate(context: Context, offset?: Vector2 | null): GeoCoordinate;
    get boundaryPointOffsets(): Vector2[];
    get boundarySegments(): Line2[];
    addBoundaryPoint(boundaryPoint: ZoneBoundaryPoint, context?: Context | null, index?: number | null): ZoneBoundaryPoint;
    updateBoundaryPointCoordinate(index: number, coordinate: GeoCoordinate, context: Context): void;
    removeBoundaryPoint(boundaryPoint: ZoneBoundaryPoint, context: Context | null): ZoneBoundaryPoint;
    boundaryPointCoordinates(context: Context): GeoCoordinate[];
    boundaryPointCoordinate(context: Context, index: number): GeoCoordinate;
    updateShape(context: Context, shape: ZoneShape, coordinate: GeoCoordinate, size: number): void;
    centerCoordinate(context: Context): GeoCoordinate;
    private get radius();
    private altitudeInRange;
    private altitudesInRange;
    private edgeSpatial;
    private intersections;
    static path(zones: Zone[], context: Context, start: GeoSpatial, finish: GeoSpatial): ZonePath | null;
}
export declare class ZonePath {
    segments: ZonePathSegment[];
    get currentSegment(): ZonePathSegment | null;
    get currentPoint(): ZonePathPoint | null;
    get currentSpatial(): GeoSpatial | null;
    get spatials(): GeoSpatial[][];
    currentAltitudeEquivalent(altitude: Altitude): boolean;
    add(spatial: GeoSpatial, zone: Zone | null): ZonePath;
}
export declare class ZonePathSegment {
    points: ZonePathPoint[];
    altitude: Altitude;
    constructor(points: ZonePathPoint[], altitude: Altitude);
    get currentPoint(): ZonePathPoint | null;
    get currentSpatial(): GeoSpatial | null;
    get spatials(): GeoSpatial[];
}
export declare class ZonePathPoint {
    coordinate: GeoCoordinate;
    zone: Zone | null;
    constructor(coordinate: GeoCoordinate, zone?: Zone | null);
}
