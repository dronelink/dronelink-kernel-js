import { Serializable } from "../core/Serializable";
import { Identifiable } from "../core/Identifiable";
import { TypeName, DJIWaypointTurnMode } from "../core/Enums";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { DJIWaypointMissionComponentWaypointAction } from "./DJIWaypointMissionComponentWaypointAction";
export declare class DJIWaypointMissionComponentWaypoint extends Identifiable implements Serializable {
    readonly type = TypeName.DJIWaypointMissionComponentWaypoint;
    coordinate: GeoCoordinate;
    altitude: number;
    heading: number;
    cornerRadius: number;
    turnMode: DJIWaypointTurnMode;
    gimbalPitch: number;
    speed: number;
    shootPhotoTimeInterval: number;
    shootPhotoDistanceInterval: number;
    actions: DJIWaypointMissionComponentWaypointAction[];
    actionRepeatTimes: number;
    actionTimeout: number;
}
