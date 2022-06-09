import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { TypeName, ExecutionEngine, CameraPhotoMode } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { ComponentEstimate } from "./ComponentEstimate";
import { ApproachableAlignment, ApproachableComponent } from "./ApproachableComponent";
import { GeoSpatial } from "../core/GeoSpatial";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { Dictionary } from "../core/Dictionary";
import { Component } from "./Component";
import { ComponentContext } from "./ComponentContext";
import { CommandComponent } from "./CommandComponent";
import { Orientation3 } from "../core/Orientation3";
export declare class PhotoComponent extends ApproachableComponent implements Serializable {
    readonly type = TypeName.PhotoComponent;
    cameraPhotoMode: CameraPhotoMode;
    captureVerifyFileCreated: boolean;
    heading: number;
    gimbalOrientations: Dictionary<Orientation3Optional>;
    applyJSON(json: any): void;
    get subtitle(): string;
    get captureChannels(): number[];
    get gimbalOrientationPrimary(): Orientation3;
    gimbalOrientationsResolved(context: ComponentContext): Dictionary<Orientation3Optional>;
    toComponentForExecutionEngine(executionEngine: ExecutionEngine, context: ComponentContext): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    get pointsOfInterestEnabled(): boolean;
    get pointsOfInterestMax(): number | null;
    get droneRotationModeReadonly(): boolean;
    headingResolved(context: ComponentContext): number;
    alignment(context: ComponentContext): ApproachableAlignment | null;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    cachedData(context: ComponentExecuteContext): PhotoData | null;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
declare class PhotoData {
    setupComponents: CommandComponent[];
    commandComponents: CommandComponent[];
}
export {};
