import { Serializable } from "./Serializable";
import { Vector2 } from "./Vector2";
import { TypeName } from "./Enums";
import { GeoSpatial } from "./GeoSpatial";
export declare class GeoCoordinate implements Serializable {
    readonly type = TypeName.GeoCoordinate;
    private static GeoRadius;
    latitude: number;
    longitude: number;
    applyJSON(json: any): void;
    constructor(latitude?: number, longitude?: number);
    get valid(): boolean;
    distance(to: GeoCoordinate): number;
    bearing(to: GeoCoordinate): number;
    geoCoordinate(offset?: Vector2 | null): GeoCoordinate;
    geoCoordinates(offsets: Vector2[]): GeoCoordinate[];
    offset(coordinate: GeoCoordinate): Vector2;
    offsets(coordinates: GeoCoordinate[]): Vector2[];
    interpolate(coordinate: GeoCoordinate, interpolate: (distance: number) => number): GeoCoordinate;
    toRadians(): GeoCoordinate;
    toLngLat(): number[];
    toGeoSpatial(): GeoSpatial;
    toString(): string;
    closest(coordinates: GeoCoordinate[]): GeoCoordinate;
    static convexHull(coordinates: GeoCoordinate[]): GeoCoordinate[] | null;
    static totalDistance(coordinates: GeoCoordinate[]): number;
}
