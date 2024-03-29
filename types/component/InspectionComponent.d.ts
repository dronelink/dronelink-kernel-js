import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { CameraMode, CameraPhotoMode, TypeName, ExecutionEngine } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { ApproachableComponent } from "./ApproachableComponent";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
import { ComponentContext } from "./ComponentContext";
import { InspectionComponentInspectionPoint } from "./InspectionComponentInspectionPoint";
import { ComponentNode } from "./ComponentNode";
import { Node } from "../core/Node";
import { Limits } from "../core/Limits";
import { DistanceTolerance } from "../core/DistanceTolerance";
import { Datetime } from "../core/Datetime";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { SubComponent } from "./SubComponent";
import { Component } from "./Component";
import { Vector2 } from "../core/Vector2";
import { Altitude } from "../core/Altitude";
import { Orientation3 } from "../core/Orientation3";
import { Simulation } from "../core/Simulation";
export declare class InspectionComponent extends ApproachableComponent implements Serializable {
    readonly type = TypeName.InspectionComponent;
    altitudeRange: Limits;
    achievementTime: number;
    achievementDistance: DistanceTolerance;
    orientationDistance: DistanceTolerance | null;
    cameraMode: CameraMode;
    cameraPhotoMode: CameraPhotoMode;
    inspectionPoints: InspectionComponentInspectionPoint[];
    applyJSON(json: any): void;
    get subtitle(): string;
    get splittable(): boolean;
    toComponentForExecutionEngine(executionEngine: ExecutionEngine, context: ComponentContext): Component | null;
    split(context: ComponentContext, params?: any | null): SubComponent[] | null;
    verification(context: ComponentContext): Component | null;
    get inspectionPointOffsets(): Vector2[];
    inspectionPointSpatials(context: ComponentContext): GeoSpatial[];
    get referenceOffsets(): Vector2[];
    referenceOffsetsHandleCoordinate(context: ComponentContext): GeoCoordinate;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    node(parent?: Node | null): ComponentNode;
    centerCoordinate(context: ComponentContext): GeoCoordinate;
    inspectionPointSpatial(context: ComponentContext, index: number, actionGroupIndex?: number | null): GeoSpatial;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    endSpatial(context: ComponentContext): GeoSpatial | null;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    addInspectionPoint(inspectionPoint: InspectionComponentInspectionPoint): void;
    cachedData(context: ComponentExecuteContext, startSpatial?: GeoSpatial | null): InspectionData | null;
    engaging(context: ComponentExecuteContext, start: GeoSpatial): GeoSpatial[] | null;
    get captureChannels(): number[];
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    static parseAsctecTrinityPoints(value: string): InspectionPointExternal[];
    static parseDJIPilotKmlPoints(value: string): InspectionPointExternal[];
    static fromSimulation(simulation: Simulation, context: ComponentContext, options: {
        pointsOrder: string;
        mergeDistance: number;
        mergeAcrossAssets: boolean;
    }): SubComponent[];
}
declare class InspectionData {
    intialComponents: SubComponent[];
    finalComponents: SubComponent[];
    pointIndex: number;
    actionGroupIndex: number;
    actionGroupStarted: Datetime | null;
    actionGroupGimbalOrientationsComponent: SubComponent | null;
    actionGroupOrientationPending: boolean;
    actionGroupCaptureComponent: SubComponent | null;
    startCoordinate: GeoCoordinate;
    achievementDistanceValidSince: Datetime | null;
    constructor(startCoordinate: GeoCoordinate);
    updatePoint(index: number, startCoordinate: GeoCoordinate): void;
    updateActionGroup(index: number): void;
    nextPoint(startCoordinate: GeoCoordinate): void;
    nextActionGroup(): void;
}
declare class InspectionPointExternal {
    readonly coordinate: GeoCoordinate;
    readonly altitude: Altitude;
    readonly orientations: Orientation3[];
    readonly passthrough: boolean;
    constructor(coordinate: GeoCoordinate, altitude: Altitude, orientations: Orientation3[], passthrough: boolean);
    toInspectionPoint(context: ComponentContext, component: InspectionComponent): InspectionComponentInspectionPoint;
}
export {};
