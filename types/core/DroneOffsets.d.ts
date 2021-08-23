import { GeoCoordinate } from "./GeoCoordinate";
import { Vector2 } from "./Vector2";
export declare class DroneOffsets {
    droneYaw: number;
    droneAltitude: number;
    droneAltitudeReference: number | null;
    droneAltitudeContinuity: boolean;
    droneCoordinate: Vector2;
    droneCoordinateReference: GeoCoordinate | null;
    cameraExposureCompensationSteps: number;
}
