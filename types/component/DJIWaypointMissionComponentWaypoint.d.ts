import { Node } from "../core/Node";
import { Serializable } from "../core/Serializable";
import { Identifiable } from "../core/Identifiable";
import { TypeName, DJIWaypointTurnMode } from "../core/Enums";
import { DJIWaypointMissionComponentWaypointAction } from "./DJIWaypointMissionComponentWaypointAction";
import { Altitude } from "../core/Altitude";
import { ListNode } from "../core/ListNode";
import { ComponentNode } from "./ComponentNode";
import { ListElementNode } from "../core/ListElementNode";
import { LimitFormatter } from "../core/Limits";
import { Descriptors } from "../core/Descriptors";
import { Vector2 } from "../core/Vector2";
import { PointOfInterestReference } from "../core/PointOfInterest";
export declare class DJIWaypointMissionComponentWaypoint extends Identifiable implements Serializable, PointOfInterestReference {
    readonly type = TypeName.DJIWaypointMissionComponentWaypoint;
    descriptors: Descriptors;
    offset: Vector2;
    altitude: Altitude;
    pointOfInterestID: string | null;
    heading: number;
    cornerRadius: number | null;
    turnMode: DJIWaypointTurnMode;
    gimbalPitch: number;
    speed: number | null;
    shootPhotoTimeInterval: number;
    shootPhotoDistanceInterval: number;
    actions: DJIWaypointMissionComponentWaypointAction[];
    actionRepeatTimes: number;
    actionTimeout: number;
    applyJSON(json: any): void;
    node(parent: DJIWaypointMissionComponentWaypointsNode, index: number): DJIWaypointMissionComponentWaypointNode;
    title(index: number): string;
    abbreviation(index: number): string;
    toString: (formatters?: DJIWaypointMissionComponentWaypointFormatters) => string;
}
export declare type DJIWaypointMissionComponentWaypointFormatters = {
    horizontal: LimitFormatter;
    vertical: LimitFormatter;
    rotational: LimitFormatter;
};
export declare class DJIWaypointMissionComponentWaypointsNode extends ListNode {
    constructor(parent: Node);
    get title(): string;
    get subtitle(): string;
}
export declare class DJIWaypointMissionComponentWaypointNode extends ListElementNode {
    readonly waypoint: DJIWaypointMissionComponentWaypoint;
    constructor(parent: Node, index: number, waypoint: DJIWaypointMissionComponentWaypoint);
    get djiWaypointMissionComponentNode(): ComponentNode;
    get subtitle(): string;
}
