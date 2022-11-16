import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { OrbitDirection, TypeName, ExecutionEngine } from "../core/Enums";
import { Vector2 } from "../core/Vector2";
import { Serializable } from "../core/Serializable";
import { ComponentEstimate } from "./ComponentEstimate";
import { ApproachableAlignment, ApproachableComponent } from "./ApproachableComponent";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { GeoSpatial } from "../core/GeoSpatial";
import { DroneMotionComponentModelSample, DroneMotionComponentModelData, DroneMotionComponentModel } from "./DroneMotionComponent";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { Dictionary } from "../core/Dictionary";
import { Component } from "./Component";
import { Altitude } from "../core/Altitude";
import { ReferencedAltitude } from "../core/ReferencedAltitude";
import { ComponentContext } from "./ComponentContext";
export declare class OrbitComponent extends ApproachableComponent implements Serializable {
    readonly type = TypeName.OrbitComponent;
    centerOffset: Vector2;
    direction: OrbitDirection;
    circumference: number;
    finalAltitude: Altitude | null;
    finalRadius: number | null;
    droneOrientation: Orientation3Optional | null;
    gimbalOrientations: Dictionary<Orientation3Optional> | null;
    applyJSON(json: any): void;
    get subtitle(): string;
    toComponentForExecutionEngine(executionEngine: ExecutionEngine, context: ComponentContext): Component | null;
    verification(context: ComponentContext): Component | null;
    get pointsOfInterestEnabled(): boolean;
    get pointsOfInterestMax(): number | null;
    get referenceOffsets(): Vector2[];
    get droneRotationModeReadonly(): boolean;
    get radius(): number;
    set radius(value: number);
    approachDestinationOffsetUpdated(context: ComponentContext): void;
    referenceOffsetsHandleCoordinate(context: ComponentContext): GeoCoordinate | null;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    boundsCoordinates(context: ComponentContext): GeoCoordinate[];
    centerCoordinate(context: ComponentContext): GeoCoordinate;
    finalCoordinate(context: ComponentContext): GeoCoordinate;
    finalReferencedAltitude(context: ComponentContext): ReferencedAltitude | null;
    alignment(context: ComponentContext): ApproachableAlignment | null;
    endSpatial(context: ComponentContext): GeoSpatial | null;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    cachedData(context: ComponentExecuteContext): DroneMotionComponentModelData<DroneMotionComponentModelSample> | null;
    engaging(context: ComponentExecuteContext, start: GeoSpatial): GeoSpatial[] | null;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    model(context: ComponentContext, positionOnly?: boolean, alignmentOrientationOnly?: boolean, pathApproximationOnly?: boolean): DroneMotionComponentModel<DroneMotionComponentModelSample> | null;
}
