import { ApproachableComponent } from "./ApproachableComponent";
import { Serializable } from "../core/Serializable";
import { Component } from "./Component";
import { TypeName, FacadeCapturePriority, FacadeBoundaryFace, FacadePattern, CameraMode, PathCornering } from "../core/Enums";
import { CameraSpecification, GroundSampleDistance } from "../core/CameraSpecification";
import { FacadeComponentBoundaryPoint } from "./FacadeComponentBoundaryPoint";
import { Altitude } from "../core/Altitude";
import { Vector2 } from "../core/Vector2";
import { Context } from "../core/Context";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { Line2 } from "../core/Line2";
import { Path } from "../core/Path";
import { ComponentNode } from "./ComponentNode";
import { Node } from "../core/Node";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate, ComponentEstimateCameraCapture } from "./ComponentEstimate";
import { LinkedValue } from "../core/LinkedValue";
import { DroneMotionComponentModelData, DroneMotionComponentModelSample, DroneMotionComponentModel } from "./DroneMotionComponent";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { MotionLimits6 } from "../core/MotionLimits6";
import { Dictionary } from "../core/Dictionary";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { ComponentExecutionState } from "./ComponentExecutionState";
import { ReferencedAltitude } from "../core/ReferencedAltitude";
import { ListComponent } from "./ListComponent";
import { SubComponent } from "./SubComponent";
export declare class FacadeComponent extends ApproachableComponent implements Serializable {
    readonly type = TypeName.FacadeComponent;
    initialAltitude: Altitude;
    finalAltitude: Altitude;
    cameraSpecification: CameraSpecification;
    gimbalOrientations: Dictionary<Orientation3Optional>;
    droneOrientation: Orientation3Optional | null;
    cameraMode: CameraMode;
    capturePriority: FacadeCapturePriority;
    minCaptureInterval: number;
    targetDistance: number;
    sampleDistanceGimbalAngleEnabled: boolean;
    pattern: FacadePattern;
    cornering: PathCornering;
    cornerRadius: number;
    verticalOverlap: number;
    horizontalOverlap: number;
    boundaryFace: FacadeBoundaryFace;
    boundaryPoints: FacadeComponentBoundaryPoint[];
    applyJSON(json: any): void;
    get subtitle(): string;
    verification(context: Context): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    alignment(context: Context): {
        droneOrientation: Orientation3Optional | null;
        gimbalOrientations: Dictionary<Orientation3Optional> | null;
    } | null;
    get referenceOffsets(): Vector2[];
    referenceOffsetsHandleCoordinate(context: Context): GeoCoordinate;
    elevationCoordinates(context: Context): GeoCoordinate[];
    node(parent?: Node | null): ComponentNode;
    centerCoordinate(context: Context): GeoCoordinate;
    initialReferencedAltitude(context: Context): ReferencedAltitude;
    finalReferencedAltitude(context: Context): ReferencedAltitude;
    get surfaceSampleDistance(): GroundSampleDistance;
    resetApproachDestinationOffset(context: Context): void;
    reverseBoundaryPoints(context: Context): void;
    addBoundaryPoint(boundaryPoint: FacadeComponentBoundaryPoint, context?: Context | null, index?: number | null): FacadeComponentBoundaryPoint;
    get boundaryClosed(): boolean;
    updateBoundaryPointCoordinate(index: number, coordinate: GeoCoordinate, context: Context): void;
    removeBoundaryPoint(boundaryPoint: FacadeComponentBoundaryPoint, context: Context): FacadeComponentBoundaryPoint;
    get boundaryPointOffsets(): Vector2[];
    get maxBoundaryPoints(): number;
    get boundarySegments(): Line2[];
    boundaryPointCoordinates(context: Context): GeoCoordinate[];
    boundaryPointCoordinate(context: Context, index: number): GeoCoordinate;
    get boundaryFaceOrientation(): number;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    cachedData(context: ComponentExecuteContext): FacadeComponentModelData | null;
    engaging(context: ComponentExecuteContext, estimate: ComponentEstimate): void;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    modelParameters(context: Context, path?: Path | null): {
        approachAltitude: Altitude;
        initialAltitude: Altitude;
        finalAltitude: Altitude;
        rows: number;
        columns: number;
    } | null;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    model(context: Context, timeRequired?: boolean): FacadeComponentModel | null;
    path(context: Context): Path | null;
    get pathCorneringEnabled(): boolean;
    get patternEnabled(): boolean;
    get patternResolved(): FacadePattern;
    private pathOffsets;
}
export declare class FacadeComponentModelData extends DroneMotionComponentModelData<FacadeComponentModelSample> {
    setupComponent: ListComponent | null;
    addedInitialFocus: boolean;
    sampleComponents: SubComponent[];
    captureInterval: number | null;
    constructor(modelSample: LinkedValue<FacadeComponentModelSample>, captureInterval: number | null);
    addSampleComponents(newSampleComponents: SubComponent[]): void;
}
export declare class FacadeComponentModel extends DroneMotionComponentModel<FacadeComponentModelSample> {
    captureInterval: number | null;
    cameraCaptures: Dictionary<ComponentEstimateCameraCapture>;
    constructor(sample: LinkedValue<FacadeComponentModelSample>, captureInterval: number | null, cameraCaptures: Dictionary<ComponentEstimateCameraCapture>);
    cameraCapture(channel?: number): ComponentEstimateCameraCapture;
}
export declare class FacadeComponentModelSample extends DroneMotionComponentModelSample {
    component: SubComponent | null;
    constructor(droneSpatial: GeoSpatial, droneMotionLimits: MotionLimits6, gimbalOrientations: Dictionary<Orientation3Optional>);
}