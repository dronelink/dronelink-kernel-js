import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { TypeName } from "../core/Enums";
import { Vector2 } from "../core/Vector2";
import { Serializable } from "../core/Serializable";
import { ComponentEstimate } from "./ComponentEstimate";
import { AltitudeRange } from "../core/AltitudeRange";
import { DistanceTolerance } from "../core/DistanceTolerance";
import { Datetime } from "../core/Datetime";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { AchievableDroneMotionComponent } from "./AchievableDroneMotionComponent";
import { DroneMotionComponentModel, DroneMotionComponentModelSample } from "./DroneMotionComponent";
import { DroneMotionComponentModelData } from "./DroneMotionComponent";
import { ComponentNode } from "./ComponentNode";
import { Node } from "../core/Node";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { ReferencedAltitude } from "../core/ReferencedAltitude";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { MotionLimits6 } from "../core/MotionLimits6";
import { Dictionary } from "../core/Dictionary";
import { Component } from "./Component";
import { ComponentContext } from "./ComponentContext";
export declare class DestinationComponent extends AchievableDroneMotionComponent implements Serializable {
    readonly type = TypeName.DestinationComponent;
    destinationOffset: Vector2;
    altitudeRange: AltitudeRange;
    achievementTime: number;
    achievementDistance: DistanceTolerance;
    droneOrientation: Orientation3Optional | null;
    gimbalOrientations: Dictionary<Orientation3Optional> | null;
    applyJSON(json: any): void;
    get subtitle(): string;
    get referenceOffsets(): Vector2[];
    verification(context: ComponentContext): Component | null;
    get pointsOfInterestEnabled(): boolean;
    node(parent?: Node | null): ComponentNode;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    destinationCoordinate(context: ComponentContext): GeoCoordinate;
    destinationReferencedAltitude(context: ComponentContext): ReferencedAltitude;
    destinationSpatial(context: ComponentContext): GeoSpatial;
    orientationSpatial(context: ComponentContext): GeoSpatial;
    endSpatial(context: ComponentContext): GeoSpatial | null;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    achieved(context: ComponentExecuteContext): boolean;
    cachedData(context: ComponentExecuteContext, startSpatial?: GeoSpatial | null): DestinationData | null;
    engaging(context: ComponentExecuteContext, start: GeoSpatial): void;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    model(context: ComponentContext, start: GeoSpatial): DroneMotionComponentModel<DestinationComponentModelSample> | null;
    private insertSamplesAltitudeChanges;
    private restrictionZonePath;
}
declare class DestinationData {
    startCoordinate: GeoCoordinate;
    totalDistance: number;
    achievementDistanceValidSince: Datetime | null;
    model: DroneMotionComponentModelData<DestinationComponentModelSample> | null;
    constructor(startCoordinate: GeoCoordinate, totalDistance: number);
    progress(remainingDistance: number): number;
}
export declare class DestinationComponentModelSample extends DroneMotionComponentModelSample {
    distance: number;
    constructor(droneSpatial: GeoSpatial, droneMotionLimits: MotionLimits6, gimbalOrientations: Dictionary<Orientation3Optional>, distance: number);
}
export {};
