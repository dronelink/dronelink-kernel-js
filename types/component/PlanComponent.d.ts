import { Serializable } from "../core/Serializable";
import { Component } from "./Component";
import { SubComponent } from "./SubComponent";
import { TypeName, PlanCompleteAction } from "../core/Enums";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentNode } from "./ComponentNode";
import { ComponentEstimate } from "./ComponentEstimate";
import { Vector2 } from "../core/Vector2";
import { DistanceTolerance } from "../core/DistanceTolerance";
import { MotionLimits6 } from "../core/MotionLimits6";
import { Node } from "../core/Node";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { PlanRestrictionZone } from "./PlanRestrictionZone";
import { PlanReengagementRules } from "./PlanReengagementRules";
import { UserInterfaceSettings } from "../core/UserInterfaceSettings";
import { MotionLimits6Optional } from "../core/MotionLimits6Optional";
import { ComponentContext } from "./ComponentContext";
export declare class PlanComponent extends Component implements Serializable {
    readonly type = TypeName.PlanComponent;
    takeoffOffset: Vector2 | null;
    takeoffDistance: DistanceTolerance;
    droneMotionLimits: MotionLimits6;
    droneMotionErrorTolerance: DistanceTolerance;
    droneMotionErrorLimits: MotionLimits6Optional | null;
    rootComponent: SubComponent;
    restrictionZones: PlanRestrictionZone[];
    altitudeContinuity: Boolean;
    reengagementRules: PlanReengagementRules;
    completeAction: PlanCompleteAction;
    userInterfaceSettings: UserInterfaceSettings | null;
    applyJSON(json: any): void;
    verification(context: ComponentContext): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    get referenceOffsets(): Vector2[];
    get requiredTakeoffCoordinate(): GeoCoordinate | null;
    get takeoffCoordinate(): GeoCoordinate;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    get context(): ComponentContext;
    node(parent?: Node | null): ComponentNode;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
