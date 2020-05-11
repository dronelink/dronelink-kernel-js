import { TypeName, MapPattern, CameraMode } from "../core/Enums";
import { ApproachableComponent } from "./ApproachableComponent";
import { Serializable } from "../core/Serializable";
import { Component } from "./Component";
import { Orientation3 } from "../core/Orientation3";
import { MapComponentBoundaryPoint } from "./MapComponentBoundaryPoint";
import { ComponentNode } from "./ComponentNode";
import { Context } from "../core/Context";
import { Node } from "../core/Node";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { Vector2 } from "../core/Vector2";
import { CameraSpecification, GroundSampleDistance } from "../core/CameraSpecification";
import { Line2 } from "../core/Line2";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate, ComponentEstimateCameraCapture } from "./ComponentEstimate";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { DroneMotionComponentModelData, DroneMotionComponentModelSample, DroneMotionComponentModel } from "./DroneMotionComponent";
import { ComponentExecutionState } from "./ComponentExecutionState";
import { BoundingBox2 } from "../core/Point2";
import { LinkedValue } from "../core/LinkedValue";
import { CommandComponent } from "./CommandComponent";
import { MotionLimits6 } from "../core/MotionLimits6";
import { Dictionary } from "../core/Dictionary";
import { Orientation3Optional } from "../core/Orientation3Optional";
export declare class MapComponent extends ApproachableComponent implements Serializable {
    readonly type = TypeName.MapComponent;
    cameraSpecification: CameraSpecification;
    direction: number;
    cameraMode: CameraMode;
    minCaptureInterval: number;
    targetDistance: number | null;
    pattern: MapPattern;
    frontOverlap: number;
    sideOverlap: number;
    droneOrientation: Orientation3Optional | null;
    gimbalOrientation: Orientation3;
    boundaryPoints: MapComponentBoundaryPoint[];
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
    targetDistanceResolved(context: Context): number;
    groundSampleDistance(context: Context): GroundSampleDistance;
    resetApproachDestinationOffset(context: Context): void;
    addBoundaryPoint(boundaryPoint: MapComponentBoundaryPoint, context?: Context | null, index?: number | null): MapComponentBoundaryPoint;
    updateBoundaryPointCoordinate(index: number, coordinate: GeoCoordinate, context: Context): void;
    removeBoundaryPoint(boundaryPoint: MapComponentBoundaryPoint, context: Context | null): MapComponentBoundaryPoint;
    get boundaryPointOffsets(): Vector2[];
    get boundarySegments(): Line2[];
    boundaryBoundingBox(rotation?: number): BoundingBox2;
    boundaryPointCoordinates(context: Context): GeoCoordinate[];
    boundaryPointCoordinate(context: Context, index: number): GeoCoordinate;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    cachedData(context: ComponentExecuteContext): MapComponentModelData | null;
    engaging(context: ComponentExecuteContext, estimate: ComponentEstimate): void;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    resolveDroneMotionLimitsCaptureInterval(context: Context): {
        motionLimits: MotionLimits6;
        captureInterval: number;
    };
    model(context: Context, altitudeRequired?: boolean, timeRequired?: boolean, pathingRequired?: boolean): MapComponentModel | null;
    private segments;
}
export declare class MapComponentModelData extends DroneMotionComponentModelData<MapComponentModelSample> {
    commandComponents: CommandComponent[];
    captureInterval: number;
    constructor(modelSample: LinkedValue<MapComponentModelSample>, captureInterval: number);
}
export declare class MapComponentModel extends DroneMotionComponentModel<MapComponentModelSample> {
    captureInterval: number;
    estimatedCapture: ComponentEstimateCameraCapture;
    constructor(sample: LinkedValue<MapComponentModelSample>, captureInterval: number, estimatedCapture: ComponentEstimateCameraCapture);
}
export declare class MapComponentModelSample extends DroneMotionComponentModelSample {
    distance: number;
    commandComponent: CommandComponent | null;
    constructor(droneSpatial: GeoSpatial, droneMotionLimits: MotionLimits6, gimbalOrientations: Dictionary<Orientation3Optional>, distance: number);
}
