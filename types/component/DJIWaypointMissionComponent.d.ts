import { Serializable } from "../core/Serializable";
import { SubComponent } from "./SubComponent";
import { TypeName, DJIWaypointMissionGotoWaypointMode, DJIWaypointMissionHeadingMode, DJIWaypointMissionFlightPathMode, AltitudeSystem, DJIWaypointMissionFinishedAction, ExecutionEngine } from "../core/Enums";
import { DJIWaypointMissionComponentWaypoint } from "./DJIWaypointMissionComponentWaypoint";
import { ComponentNode } from "./ComponentNode";
import { Node } from "../core/Node";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
import { ComponentContext } from "./ComponentContext";
import { Simulation } from "../core/Simulation";
import { Vector2 } from "../core/Vector2";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { TimelineFrameGroup } from "../core/Timeline";
import { Component } from "./Component";
import { PathComponent } from "./PathComponent";
import { PointOfInterestReference } from "../core/PointOfInterest";
import { Path } from "../core/Path";
export declare class DJIWaypointMissionComponent extends SubComponent implements Serializable {
    readonly type = TypeName.DJIWaypointMissionComponent;
    autoFlightSpeed: number;
    gotoFirstWaypointMode: DJIWaypointMissionGotoWaypointMode;
    exitMissionOnRCSignalLost: boolean;
    repeatTimes: number;
    maxFlightSpeed: number;
    rotateGimbalPitch: boolean;
    headingMode: DJIWaypointMissionHeadingMode;
    flightPathMode: DJIWaypointMissionFlightPathMode;
    cornerRadius: number;
    waypoints: DJIWaypointMissionComponentWaypoint[];
    applyJSON(json: any): void;
    toJSONCompatible(context: ComponentContext, finishedAction?: DJIWaypointMissionFinishedAction): any;
    get exclusiveReadonly(): boolean;
    get exclusiveExecution(): boolean;
    get repositionIfIncluded(): boolean;
    get subtitle(): string;
    get executionEngines(): ExecutionEngine[];
    get pointsOfInterestEnabled(): boolean;
    get pointsOfInterestMax(): number | null;
    get pointsOfInterestReferences(): PointOfInterestReference[];
    get waypointOffsets(): Vector2[];
    get referenceOffsets(): Vector2[];
    referenceOffsetsHandleCoordinate(context: ComponentContext): GeoCoordinate;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    node(parent?: Node | null): ComponentNode;
    centerCoordinate(context: ComponentContext): GeoCoordinate;
    waypointCoordinate(context: ComponentContext, index: number): GeoCoordinate;
    waypointCoordinates(context: ComponentContext): GeoCoordinate[];
    waypointSpatials(context: ComponentContext, altitudeSystem?: AltitudeSystem): GeoSpatial[];
    get waypointCornerRadiuses(): number[];
    get canAddWaypoints(): boolean;
    addWaypoint(waypoint: DJIWaypointMissionComponentWaypoint, context?: ComponentContext | null): DJIWaypointMissionComponentWaypoint;
    endSpatial(context: ComponentContext): GeoSpatial | null;
    toComponentForExecutionEngine(executionEngine: ExecutionEngine, context: ComponentContext): Component | null;
    toPathComponent(context: ComponentContext, markers?: boolean): PathComponent | null;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    path(context: ComponentContext): Path | null;
    static fromSimulation(simulation: Simulation, context: ComponentContext, options: any): SubComponent[];
    static fromSimulation2(simulation: Simulation, context: ComponentContext, options: any): SubComponent[];
    static fromFrameGroup(frameGroup: TimelineFrameGroup, context: ComponentContext, options: any): DJIWaypointMissionComponent;
}
