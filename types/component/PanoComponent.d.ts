import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { TypeName, ExecutionEngine, CameraPhotoMode, PanoPattern } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { ComponentEstimate } from "./ComponentEstimate";
import { ApproachableComponent } from "./ApproachableComponent";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { Component } from "./Component";
import { ComponentContext } from "./ComponentContext";
import { CommandComponent } from "./CommandComponent";
import { SubComponent } from "./SubComponent";
export declare class PanoComponent extends ApproachableComponent implements Serializable {
    readonly type = TypeName.PanoComponent;
    pattern: PanoPattern;
    cameraPhotoMode: CameraPhotoMode;
    captureVerifyFileCreated: boolean;
    heading: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    toComponentForExecutionEngine(executionEngine: ExecutionEngine, context: ComponentContext): Component | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    get pointsOfInterestEnabled(): boolean;
    get pointsOfInterestMax(): number | null;
    get droneRotationModeReadonly(): boolean;
    headingResolved(context: ComponentContext): number;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    createSetupCommandComponents(): CommandComponent[];
    frames(context: ComponentContext): PanoFrame[];
    cachedData(context: ComponentExecuteContext): PanoData | null;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
declare class PanoFrame {
    heading: number;
    pitch: number;
    evSteps: number | null;
    constructor(heading: number, pitch: number, evSteps?: number | null);
}
declare class PanoData {
    setupComponents: CommandComponent[];
    frames: PanoFrame[];
    frameComponent: SubComponent | null;
    finalComponent: SubComponent | null;
    constructor(frames: PanoFrame[]);
    createFrameComponent(frameIndex: number, captureVerifyFileCreated: boolean): SubComponent;
}
export {};
