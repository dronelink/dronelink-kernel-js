import { GeoCoordinate } from "./GeoCoordinate";
export declare class Path {
    readonly distance: number;
    readonly segments: PathSegment[];
    constructor(segments: GeoCoordinate[][]);
    get points(): PathPoint[];
    get coordinates(): GeoCoordinate[];
    get segmentEndPoints(): PathPoint[];
    get segmentCenterCoordinates(): GeoCoordinate[];
    nextCoordinate(distance?: number | null, padding?: number): GeoCoordinate;
    nearestCoordinate(coordinate: GeoCoordinate): GeoCoordinate;
    nearestDistance(coordinate: GeoCoordinate): number;
    sampleForDistance(distance: number, clamp?: boolean): PathSample;
    samplesForMaxDistance(maxDistance: number, clamp?: boolean): PathSample[];
    samplesForDistances(distances: number[], clamp?: boolean): PathSample[];
}
export declare type PathSegment = PathPoint[];
export declare class PathPoint {
    coordinate: GeoCoordinate;
    index: number;
    distance: number;
    segment: number;
    segmentIndex: number;
    segmentDistance: number;
    constructor(coordinate: GeoCoordinate, index: number, distance: number, segment: number, segmentIndex: number, segmentDistance: number);
}
export declare class PathSample {
    coordinate: GeoCoordinate;
    direction: number;
    distance: number;
    constructor(coordinate: GeoCoordinate, direction: number, distance: number);
}
