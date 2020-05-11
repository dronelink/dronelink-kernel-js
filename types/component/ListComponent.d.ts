import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { Context } from "../core/Context";
import { ComponentEstimate } from "./ComponentEstimate";
import { ComponentNode } from "./ComponentNode";
import { SubComponent } from "./SubComponent";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { Node } from "../core/Node";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { Component } from "./Component";
export declare class ListComponent extends SubComponent implements Serializable {
    readonly type = TypeName.ListComponent;
    childComponents: SubComponent[];
    applyJSON(json: any): void;
    get subtitle(): string;
    verification(context: Context): Component | null;
    get exclusiveReadonly(): boolean;
    get exclusiveExecution(): boolean;
    get repositionIfIncluded(): boolean;
    referenceOffsetsHandleCoordinate(context: Context): GeoCoordinate | null;
    node(parent?: Node | null): ComponentNode;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    toString: () => string;
}
