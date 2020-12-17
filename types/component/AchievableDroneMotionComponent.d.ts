import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { SubComponent } from "./SubComponent";
import { DroneMotionComponent } from "./DroneMotionComponent";
import { ComponentNode } from "./ComponentNode";
import { SerializableAbstract } from "../core/SerializableAbstract";
import { Node } from "../core/Node";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
import { Component } from "./Component";
import { ComponentContext } from "./ComponentContext";
export declare abstract class AchievableDroneMotionComponent extends DroneMotionComponent implements SerializableAbstract {
    immediateComponent: SubComponent | null;
    achievedComponent: SubComponent | null;
    applyJSON(json: any): void;
    verification(context: ComponentContext): Component | null;
    node(parent?: Node | null): ComponentNode;
    achieved(context: ComponentExecuteContext): boolean;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
