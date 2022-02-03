import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { Vector2 } from "../core/Vector2";
import { Serializable } from "../core/Serializable";
import { ComponentEstimate } from "./ComponentEstimate";
import { TypeName, PathCornering, ExecutionEngine } from "../core/Enums";
import { ApproachableAlignment, ApproachableComponent } from "./ApproachableComponent";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { PathComponentWaypoint } from "./PathComponentWaypoint";
import { PathComponentMarker } from "./PathComponentMarker";
import { Path } from "../core/Path";
import { ComponentNode } from "./ComponentNode";
import { PointOfInterestReference } from "../core/PointOfInterest";
import { Node } from "../core/Node";
import { PathComponentModelSample, PathComponentModel, PathComponentModelParameters } from "./PathComponentModel";
import { GeoSpatial } from "../core/GeoSpatial";
import { DroneMotionComponentModelData } from "./DroneMotionComponent";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { Component } from "./Component";
import { ComponentContext } from "./ComponentContext";
export declare class PathComponent extends ApproachableComponent implements Serializable {
    readonly type = TypeName.PathComponent;
    cornering: PathCornering;
    cornerRadius: number;
    waypoints: PathComponentWaypoint[];
    markers: PathComponentMarker[];
    applyJSON(json: any): void;
    get subtitle(): string;
    toComponentForExecutionEngine(executionEngine: ExecutionEngine, context: ComponentContext): Component | null;
    verification(context: ComponentContext): Component | null;
    get pointsOfInterestEnabled(): boolean;
    get pointsOfInterestReferences(): PointOfInterestReference[];
    get droneRotationModeReadonly(): boolean;
    get waypointOffsets(): Vector2[];
    get referenceOffsets(): Vector2[];
    referenceOffsetsHandleCoordinate(context: ComponentContext): GeoCoordinate;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    node(parent?: Node | null): ComponentNode;
    centerCoordinate(context: ComponentContext): GeoCoordinate;
    waypointCoordinate(context: ComponentContext, index: number): GeoCoordinate;
    waypointCoordinates(context: ComponentContext): GeoCoordinate[];
    waypointDistances(context: ComponentContext): number[] | null;
    addWaypoint(waypoint: PathComponentWaypoint, context?: ComponentContext | null): PathComponentWaypoint;
    markerCoordinates(context: ComponentContext): GeoCoordinate[] | null;
    addMarker(marker: PathComponentMarker): PathComponentMarker;
    orderMarkers(): void;
    path(context: ComponentContext): Path | null;
    alignment(context: ComponentContext): ApproachableAlignment | null;
    endSpatial(context: ComponentContext): GeoSpatial | null;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    cachedData(context: ComponentExecuteContext): DroneMotionComponentModelData<PathComponentModelSample> | null;
    engaging(context: ComponentExecuteContext, start: GeoSpatial): GeoSpatial[] | null;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    model(context: ComponentContext, positionOnly?: boolean, alignmentOrientationOnly?: boolean): PathComponentModel | null;
    modelParameters(context: ComponentContext, positionOnly?: boolean): PathComponentModelParameters | null;
}
