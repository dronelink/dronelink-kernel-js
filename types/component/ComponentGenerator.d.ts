import { ComponentContext } from "./ComponentContext";
import { PathComponent } from "./PathComponent";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { MapComponent } from "./MapComponent";
import { CameraSpecification } from "../core/CameraSpecification";
import { OrbitComponent } from "./OrbitComponent";
import { DJIWaypointMissionComponent } from "./DJIWaypointMissionComponent";
import { DestinationComponent } from "./DestinationComponent";
import { FacadeComponent } from "./FacadeComponent";
import { PhotoComponent } from "./PhotoComponent";
import { PanoComponent } from "./PanoComponent";
export declare class ComponentGenerator {
    static destination(context?: ComponentContext | null, coordinate?: GeoCoordinate | null): DestinationComponent;
    static path(context?: ComponentContext | null, coordinate?: GeoCoordinate | null, fromCoordinate?: GeoCoordinate | null): PathComponent;
    static pathExtended(context?: ComponentContext | null, coordinate?: GeoCoordinate | null): PathComponent;
    static orbit(context?: ComponentContext | null, coordinate?: GeoCoordinate | null, fromCoordinate?: GeoCoordinate | null, center?: boolean, altitude?: number | null): OrbitComponent;
    static photo(context?: ComponentContext | null, coordinate?: GeoCoordinate | null, altitude?: number | null, heading?: number | null, pitch?: number | null): PhotoComponent;
    static pano(context?: ComponentContext | null, coordinate?: GeoCoordinate | null, altitude?: number | null, heading?: number | null): PanoComponent;
    static map(context?: ComponentContext | null, cameraSpecification?: CameraSpecification, coordinate?: GeoCoordinate | null): MapComponent;
    static facade(context?: ComponentContext | null, cameraSpecification?: CameraSpecification, coordinate?: GeoCoordinate | null): FacadeComponent;
    static djiWaypointMission(context?: ComponentContext | null, coordinate?: GeoCoordinate | null, fromCoordinate?: GeoCoordinate | null): DJIWaypointMissionComponent;
    static solar(context?: ComponentContext | null, cameraSpecification?: CameraSpecification): MapComponent;
}
