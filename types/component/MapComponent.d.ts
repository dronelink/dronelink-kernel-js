import { TypeName, MapPattern, CameraMode } from "../core/Enums";
import { ApproachableComponent } from "./ApproachableComponent";
import { Serializable } from "../core/Serializable";
import { Component } from "./Component";
import { Orientation3 } from "../core/Orientation3";
import { MapComponentBoundaryPoint } from "./MapComponentBoundaryPoint";
import { ComponentNode } from "./ComponentNode";
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
import { ComponentContext } from "./ComponentContext";
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
    area(): number;
    verification(context: ComponentContext): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    alignment(context: ComponentContext): {
        droneOrientation: Orientation3Optional | null;
        gimbal: {
            orientations: Dictionary<Orientation3Optional>;
            required: boolean;
        } | null;
    } | null;
    get referenceOffsets(): Vector2[];
    referenceOffsetsHandleCoordinate(context: ComponentContext): GeoCoordinate;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    node(parent?: Node | null): ComponentNode;
    centerCoordinate(context: ComponentContext): GeoCoordinate;
    targetDistanceResolved(context: ComponentContext): number;
    groundSampleDistance(context: ComponentContext): GroundSampleDistance;
    resetApproachDestinationOffset(context: ComponentContext): void;
    addBoundaryPoint(boundaryPoint: MapComponentBoundaryPoint, context?: ComponentContext | null, index?: number | null): MapComponentBoundaryPoint;
    updateBoundaryPointCoordinate(index: number, coordinate: GeoCoordinate, context: ComponentContext): void;
    removeBoundaryPoint(boundaryPoint: MapComponentBoundaryPoint, context: ComponentContext | null): MapComponentBoundaryPoint;
    get boundaryPointOffsets(): Vector2[];
    get boundarySegments(): Line2[];
    boundaryBoundingBox(rotation?: number): BoundingBox2;
    boundaryPointCoordinates(context: ComponentContext): GeoCoordinate[];
    boundaryPointCoordinate(context: ComponentContext, index: number): GeoCoordinate;
    endSpatial(context: ComponentContext): GeoSpatial | null;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    cachedData(context: ComponentExecuteContext): MapComponentModelData | null;
    engaging(context: ComponentExecuteContext, start: GeoSpatial): void;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    resolveDroneMotionLimitsCaptureInterval(context: ComponentContext): {
        motionLimits: MotionLimits6;
        captureInterval: number;
    };
    model(context: ComponentContext, altitudeRequired?: boolean, timeRequired?: boolean, pathingRequired?: boolean): MapComponentModel | null;
    private segments;
}
export declare class MapComponentModelData extends DroneMotionComponentModelData<MapComponentModelSample> {
    setupComponents: CommandComponent[];
    addedInitialFocus: boolean;
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
