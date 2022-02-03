import { TypeName, CapturePriority, MapPattern, CameraMode, CameraPhotoMode, ExecutionEngine, MapDroneOrientationStrategy, MapSpacing } from "../core/Enums";
import { ApproachableAlignment, ApproachableComponent } from "./ApproachableComponent";
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
import { ComponentEstimate, ComponentEstimateCameraCaptures } from "./ComponentEstimate";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { DroneMotionComponentModelData, DroneMotionComponentModelSample, DroneMotionComponentModel } from "./DroneMotionComponent";
import { ComponentExecutionState } from "./ComponentExecutionState";
import { BoundingBox2 } from "../core/Point2";
import { LinkedValue } from "../core/LinkedValue";
import { CommandComponent } from "./CommandComponent";
import { MotionLimits6 } from "../core/MotionLimits6";
import { Dictionary } from "../core/Dictionary";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { Altitude } from "../core/Altitude";
import { MotionLimits6Optional } from "../core/MotionLimits6Optional";
import { ComponentContext } from "./ComponentContext";
export declare class MapComponent extends ApproachableComponent implements Serializable {
    readonly type = TypeName.MapComponent;
    spacing: MapSpacing;
    cameraSpecification: CameraSpecification;
    frontOverlap: number;
    sideOverlap: number;
    frontDistance: number;
    sideDistance: number;
    direction: number;
    cameraMode: CameraMode;
    cameraPhotoMode: CameraPhotoMode;
    captureVerifyFileCreated: boolean;
    capturePriority: CapturePriority;
    captureDroneMotionLimits: MotionLimits6Optional;
    minCaptureInterval: number;
    targetDistance: number | null;
    pattern: MapPattern;
    droneOrientationStrategy: MapDroneOrientationStrategy;
    droneOrientation: Orientation3Optional | null;
    gimbalOrientations: Dictionary<Orientation3Optional>;
    boundaryPoints: MapComponentBoundaryPoint[];
    preferredStartOffset: Vector2 | null;
    applyJSON(json: any): void;
    get subtitle(): string;
    validate(context: ComponentContext): void;
    droneOrientationResolved(segments: MapComponentSegment[] | null): Orientation3Optional | null;
    get droneOrientationPerpendicular(): boolean;
    syncSpacing(context: ComponentContext): void;
    get captureChannels(): number[];
    get gimbalOrientationPrimary(): Orientation3;
    get terrainFollow(): boolean;
    toComponentForExecutionEngine(executionEngine: ExecutionEngine, context: ComponentContext): Component | null;
    area(): number;
    verification(context: ComponentContext): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    alignment(context: ComponentContext): ApproachableAlignment | null;
    get referenceOffsets(): Vector2[];
    referenceOffsetsHandleCoordinate(context: ComponentContext): GeoCoordinate;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    node(parent?: Node | null): ComponentNode;
    centerCoordinate(context: ComponentContext): GeoCoordinate;
    targetDistanceResolved(context: ComponentContext): number;
    groundSampleDistance(context: ComponentContext): GroundSampleDistance;
    cameraOverlapDistance(context: ComponentContext): {
        front: number;
        side: number;
    };
    rampDistance(context: ComponentContext): number;
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
    engaging(context: ComponentExecuteContext, start: GeoSpatial): GeoSpatial[] | null;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    resolveDroneMotionLimitsCaptureInterval(context: ComponentContext): {
        motionLimits: MotionLimits6;
        captureMotionLimits: MotionLimits6;
        captureIntervalTime: number;
        captureIntervalDistance: number;
    };
    startAltitude(context: ComponentContext): Altitude;
    model(context: ComponentContext, altitudeRequired?: boolean, timeRequired?: boolean): MapComponentModel | null;
    private segments;
    private applyElevationData;
}
declare class MapComponentSegment {
    direction: number;
    distance: number;
    readonly points: MapComponentSegmentPoint[];
    constructor(spatials: GeoSpatial[]);
    get start(): MapComponentSegmentPoint;
    get end(): MapComponentSegmentPoint;
}
declare class MapComponentSegmentPoint {
    readonly spatial: GeoSpatial;
    readonly distance: number;
    constructor(spatial: GeoSpatial, distance: number);
}
export declare class MapComponentModelData extends DroneMotionComponentModelData<MapComponentModelSample> {
    setupComponents: CommandComponent[];
    commandComponents: CommandComponent[];
    captureInterval: number;
    constructor(modelSample: LinkedValue<MapComponentModelSample>, captureInterval: number);
}
export declare class MapComponentModel extends DroneMotionComponentModel<MapComponentModelSample> {
    captureIntervalTime: number;
    captureIntervalDistance: number;
    cameraCaptures: ComponentEstimateCameraCaptures;
    constructor(sample: LinkedValue<MapComponentModelSample>, captureIntervalTime: number, captureIntervalDistance: number, cameraCaptures: ComponentEstimateCameraCaptures);
}
export declare class MapComponentModelSample extends DroneMotionComponentModelSample {
    commandType: TypeName | null;
    constructor(droneSpatial: GeoSpatial, droneMotionLimits: MotionLimits6, gimbalOrientations: Dictionary<Orientation3Optional>);
}
export {};
