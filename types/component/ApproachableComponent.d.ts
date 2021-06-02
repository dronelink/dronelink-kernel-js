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
    applyJSON(json: any): void;
    get subtitle(): string;
    verification(context: ComponentContext): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    approachCoordinate(context: ComponentContext): GeoCoordinate;
    alignment(context: ComponentContext): {
        droneOrientation: Orientation3Optional | null;
        gimbal: {
            orientations: Dictionary<Orientation3Optional>;
            required: boolean;
        } | null;
    } | null;
    node(parent?: Node | null): ComponentNode;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    aligned(context: ComponentExecuteContext): boolean;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
