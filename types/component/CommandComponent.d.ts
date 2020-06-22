import { Serializable } from "../core/Serializable";
import { SubComponent } from "./SubComponent";
import { TypeName } from "../core/Enums";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { ComponentExecutionState } from "./ComponentExecutionState";
import { Command } from "../command/Command";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
import { Component } from "./Component";
import { Context } from "../core/Context";
export declare class CommandComponent extends SubComponent implements Serializable {
    readonly type = TypeName.CommandComponent;
    command: Command;
    applyJSON(json: any): void;
    constructor(command?: Command);
    get title(): string;
    get subtitle(): string;
    verification(context: Context): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}