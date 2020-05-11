import { Serializable } from "../core/Serializable";
import { SubComponent } from "./SubComponent";
import { TypeName, DJIWaypointMissionGotoWaypointMode, DJIWaypointMissionHeadingMode, DJIWaypointMissionFlightPathMode } from "../core/Enums";
import { DJIWaypointMissionComponentWaypoint } from "./DJIWaypointMissionComponentWaypoint";
import { GeoCoordinate } from "../core/GeoCoordinate";
export declare class DJIWaypointMissionComponent extends SubComponent implements Serializable {
    readonly type = TypeName.DJIWaypointMissionComponent;
    autoFlightSpeed: number;
    gotoFirstWaypointMode: DJIWaypointMissionGotoWaypointMode;
    exitMissionOnRCSignalLost: boolean;
    repeatTimes: number;
    maxFlightSpeed: number;
    rotateGimbalPitch: boolean;
    headingMode: DJIWaypointMissionHeadingMode;
    pointOfInterest: GeoCoordinate;
    flightPathMode: DJIWaypointMissionFlightPathMode;
    waypoints: DJIWaypointMissionComponentWaypoint[];
}
