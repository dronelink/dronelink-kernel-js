import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { DestinationComponent } from "./DestinationComponent";
import { ComponentNode } from "./ComponentNode";
import { DroneMotionComponent } from "./DroneMotionComponent";
import { SerializableAbstract } from "../core/SerializableAbstract";
import { ComponentEstimate } from "./ComponentEstimate";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { Node } from "../core/Node";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { Component } from "./Component";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { Dictionary } from "../core/Dictionary";
import { ComponentContext } from "./ComponentContext";
export declare abstract class ApproachableComponent extends DroneMotionComponent implements SerializableAbstract {
    approachComponent: DestinationComponent;
    alignmentFinishDelay: number | null;
    applyJSON(json: any): void;
    get subtitle(): string;
    verification(context: ComponentContext): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    endSpatial(context: ComponentContext): GeoSpatial | null;
    boundsCoordinates(context: ComponentContext): GeoCoordinate[];
    approachCoordinate(context: ComponentContext): GeoCoordinate;
    approachDestinationOffsetUpdated(context: ComponentContext): void;
    resetApproachDestinationOffset(context: ComponentContext): void;
    alignment(context: ComponentContext): ApproachableAlignment | null;
    node(parent?: Node | null): ComponentNode;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    aligned(context: ComponentExecuteContext): boolean;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
}
export declare class ApproachableAlignment {
    droneOrientation: Orientation3Optional | null;
    gimbal: {
        orientations: Dictionary<Orientation3Optional>;
        required: boolean;
    } | null;
    constructor(droneOrientation?: Orientation3Optional | null, gimbal?: {
        orientations: Dictionary<Orientation3Optional>;
        required: boolean;
    } | null);
}
