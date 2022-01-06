import { SubComponent } from "./SubComponent";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { VelocityDroneCommand } from "../command/drone/VelocityDroneCommand";
import { DroneRotationMode } from "../core/Enums";
import { MotionLimits6Optional } from "../core/MotionLimits6Optional";
import { Velocity6 } from "../core/Velocity6";
import { MotionLimits6 } from "../core/MotionLimits6";
import { SerializableAbstract } from "../core/SerializableAbstract";
import { Component } from "./Component";
import { GeoSpatial } from "../core/GeoSpatial";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { Dictionary } from "../core/Dictionary";
import { LinkedValue } from "../core/LinkedValue";
import { Velocity3 } from "../core/Velocity3";
import { ComponentEstimate } from "./ComponentEstimate";
import { OrientationReferenceSources } from "../core/OrientationReferenceSources";
import { Message } from "../core/Message";
import { DistanceTolerance } from "../core/DistanceTolerance";
import { ComponentContext } from "./ComponentContext";
import { PlanRestrictionZone } from "./PlanRestrictionZone";
export declare abstract class DroneMotionComponent extends SubComponent implements SerializableAbstract {
    droneMotionLimits: MotionLimits6Optional;
    droneMotionErrorTolerance: DistanceTolerance | null;
    droneMotionErrorModelDelayAllowed: boolean;
    droneMotionErrorLimits: MotionLimits6Optional | null;
    droneRotationMode: DroneRotationMode | null;
    restrictionZonesEnabled: boolean;
    applyJSON(json: any): void;
    get exclusiveReadonly(): boolean;
    get exclusiveExecution(): boolean;
    get repositionIfIncluded(): boolean;
    descendantAllowed(component: Component): boolean;
    resolveDroneMotionLimits(context: ComponentContext, droneMotionLimits?: MotionLimits6Optional | null): MotionLimits6;
    resolveDroneMotionErrorTolerance(context: ComponentContext, droneMotionErrorTolerance?: DistanceTolerance | null): DistanceTolerance;
    resolveDroneMotionErrorLimits(context: ComponentContext, droneMotionLimits: MotionLimits6): MotionLimits6;
    updateModelProgress(context: ComponentExecuteContext, model: DroneMotionComponentModelData<DroneMotionComponentModelSample>): void;
    addVelocityCommandsFromModel(context: ComponentExecuteContext, model: DroneMotionComponentModelData<DroneMotionComponentModelSample>, droneRotationMode?: DroneRotationMode | null, ignoreGimbal?: boolean): void;
    addDroneVelocityCommand(context: ComponentExecuteContext, velocity: Velocity6, heading?: number | null): VelocityDroneCommand;
    reengagementDroneSpatial(context: ComponentExecuteContext): GeoSpatial | null;
    engaging(context: ComponentExecuteContext, start: GeoSpatial): GeoSpatial[] | null;
    activeRestrictionZones(context: ComponentContext): PlanRestrictionZone[];
}
export declare class DroneMotionComponentModelData<S extends DroneMotionComponentModelSample> {
    private _sample;
    private currentTime;
    readonly totalTime: number;
    filters: any;
    constructor(modelSample: LinkedValue<S>);
    updateProgress(progress: number): void;
    updateTime(time: number): void;
    incrementTime(time: number): void;
    get sampleDroneSpatials(): GeoSpatial[] | null;
    get sampleLinked(): LinkedValue<S>;
    get sampleInterpolated(): DroneMotionComponentModelSample;
    get progress(): number;
}
export declare class DroneMotionComponentModel<S extends DroneMotionComponentModelSample> {
    readonly firstSample: LinkedValue<S>;
    readonly samples: LinkedValue<S>[];
    constructor(sample: LinkedValue<S>);
    addToEstimate(estimate: ComponentEstimate): void;
    get distance(): number;
    static insertSamplesAltitudeChanges(context: ComponentContext, modelSample: LinkedValue<DroneMotionComponentModelSample>, maxSampleDistance: number, approachAltitudeATL: number): void;
    static updateSamplesContrainVelocities(sample: LinkedValue<DroneMotionComponentModelSample>, maxSampleDistance: number, smoothing: boolean): void;
    private static updateSamplesSmooth;
    private static updateSamplesContrainHorizontalVelocitiesByAcceleration;
    private static updateSamplesContrainVerticalVelocitiesByAcceleration;
    private static updateSamplesContrainHorizontalVelocitiesByTime;
    private static updateSamplesContrainVerticalVelocitiesByTime;
    private static updateSamplesTime;
    private static updateSamplesOrientationVelocities;
}
export declare class DroneMotionComponentModelSampleLinked extends LinkedValue<DroneMotionComponentModelSample> {
}
export declare class DroneMotionComponentModelSample {
    time: number;
    droneSpatial: GeoSpatial;
    droneMotionLimits: MotionLimits6;
    droneMotionErrorTolerance: DistanceTolerance | null;
    gimbalOrientations: Dictionary<Orientation3Optional>;
    gimbalVelocities: Dictionary<Velocity3>;
    message: Message | null;
    applyJSON(json: any): void;
    constructor(droneSpatial: GeoSpatial, droneMotionLimits: MotionLimits6, gimbalOrientations: Dictionary<Orientation3Optional>, gimbalVelocities: Dictionary<Velocity3>, message?: Message | null);
    interpolate(next: DroneMotionComponentModelSample, percent: number, referenceSources?: OrientationReferenceSources): DroneMotionComponentModelSample;
}
