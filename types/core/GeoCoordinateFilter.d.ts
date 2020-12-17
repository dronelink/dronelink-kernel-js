import { GeoCoordinate } from "./GeoCoordinate";
export declare class GeoCoordinateFilter {
    coordinate: GeoCoordinate;
    private latitude;
    private longitude;
    constructor(coordinate: GeoCoordinate, settings?: any);
    add(coordinate: GeoCoordinate): void;
}
