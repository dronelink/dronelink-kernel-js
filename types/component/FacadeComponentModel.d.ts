import { FacadeBoundaryFace, FacadePattern, CapturePriority, CameraMode } from "../core/Enums";
import { Path } from "../core/Path";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimateCameraCapture, ComponentEstimateCameraCaptures } from "./ComponentEstimate";
import { LinkedValue } from "../core/LinkedValue";
import { DroneMotionComponentModelData, DroneMotionComponentModelSample, DroneMotionComponentModel } from "./DroneMotionComponent";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { MotionLimits6 } from "../core/MotionLimits6";
import { Dictionary } from "../core/Dictionary";
import { SubComponent } from "./SubComponent";
import { PayloadCommand } from "../command/PayloadCommand";
import { ComponentContext } from "./ComponentContext";
import { PlanRestrictionZone } from "./PlanRestrictionZone";
import { Altitude } from "../core/Altitude";
import { Message } from "../core/Message";
import { FacadeComponentBoundaryRadius } from "./FacadeComponent";
import { MotionLimits6Optional } from "..";
export declare class FacadeComponentModel extends DroneMotionComponentModel<FacadeComponentModelSample> {
    static generate(context: ComponentContext, timeRequired: boolean | undefined, paths: Path[], parameters: FacadeComponentModelParameters): FacadeComponentModel | null;
    static createHorizontalSamples(context: ComponentContext, paths: Path[], parameters: FacadeComponentModelParameters, cameraCaptures: ComponentEstimateCameraCaptures): LinkedValue<FacadeComponentModelSample> | null;
    static createHorizontalSamplesRestricted(context: ComponentContext, paths: Path[], parameters: FacadeComponentModelParameters, cameraCaptures: ComponentEstimateCameraCaptures): LinkedValue<FacadeComponentModelSample> | null;
    static createHorizontalSamplesUnrestricted(paths: Path[], parameters: FacadeComponentModelParameters, cameraCaptures: ComponentEstimateCameraCaptures): LinkedValue<FacadeComponentModelSample> | null;
    static createVerticalSamples(context: ComponentContext, paths: Path[], parameters: FacadeComponentModelParameters, cameraCaptures: ComponentEstimateCameraCaptures): LinkedValue<FacadeComponentModelSample> | null;
    parameters: FacadeComponentModelParameters;
    cameraCaptures: Dictionary<ComponentEstimateCameraCapture>;
    constructor(sample: LinkedValue<FacadeComponentModelSample>, parameters: FacadeComponentModelParameters, cameraCaptures: Dictionary<ComponentEstimateCameraCapture>);
    cameraCapture(channel?: number): ComponentEstimateCameraCapture;
}
export declare class FacadeComponentModelSample extends DroneMotionComponentModelSample {
    component: SubComponent | null;
    restrictionZoneLimited: boolean;
    constructor(droneSpatial: GeoSpatial, droneMotionLimits: MotionLimits6, gimbalOrientations: Dictionary<Orientation3Optional>, message?: Message | null);
    addPayloadCommandComponent(channel: string, command: PayloadCommand, required?: boolean | null): void;
}
export declare class FacadeComponentModelData extends DroneMotionComponentModelData<FacadeComponentModelSample> {
    setupComponents: SubComponent[];
    addedInitialFocus: boolean;
    sampleComponents: SubComponent[];
    captureInterval: number | null;
    constructor(modelSample: LinkedValue<FacadeComponentModelSample>, captureInterval: number | null);
    addSampleComponents(newSampleComponents: SubComponent[]): void;
}
export declare class FacadeComponentModelParameters {
    readonly motionLimits: MotionLimits6;
    readonly approachSpatial: GeoSpatial;
    readonly initialAltitude: Altitude;
    readonly finalAltitude: Altitude;
    readonly targetDistance: number;
    readonly rows: number;
    readonly rowSpacing: number;
    readonly columns: number;
    readonly columnSpacing: number;
    readonly capturePriority: CapturePriority;
    readonly captureIntervalTime: number;
    readonly captureIntervalDistance: number;
    readonly captureMotionLimits: MotionLimits6Optional;
    readonly cameraMode: CameraMode;
    readonly captureVerifyFileCreated: boolean;
    readonly pattern: FacadePattern;
    readonly boundaryFace: FacadeBoundaryFace;
    readonly boundaryClosed: boolean;
    readonly boundaryFaceOrientation: number;
    readonly gimbalOrientations: Dictionary<Orientation3Optional>;
    readonly droneOrientation: Orientation3Optional | null;
    readonly activeRestrictionZones: PlanRestrictionZone[];
    readonly boundaryRadius: FacadeComponentBoundaryRadius | null;
    constructor(motionLimits: MotionLimits6, approachSpatial: GeoSpatial, initialAltitude: Altitude, finalAltitude: Altitude, targetDistance: number, rows: number, rowSpacing: number, columns: number, columnSpacing: number, capturePriority: CapturePriority, captureIntervalTime: number, captureIntervalDistance: number, cameraMode: CameraMode, captureVerifyFileCreated: boolean, captureMotionLimits: MotionLimits6Optional, pattern: FacadePattern, boundaryFace: FacadeBoundaryFace, boundaryClosed: boolean, boundaryFaceOrientation: number, gimbalOrientations: Dictionary<Orientation3Optional>, droneOrientation: Orientation3Optional | null, activeRestrictionZones: PlanRestrictionZone[], boundaryRadius: FacadeComponentBoundaryRadius | null);
    get capturePriorityResolved(): CapturePriority | null;
    get pathSampleDistance(): number;
    get circle(): boolean;
    get spiral(): boolean;
    segmentsHorizontalRestricted(context: ComponentContext, paths: Path[]): FacadeComponentModelRowSegment[];
    get minAltitude(): Altitude;
    get maxAltitude(): Altitude;
    rowAltitude(row: number): number;
    boundaryRadiusForRow(row: number): number;
    boundaryRadiusForAltitude(altitude: number): number;
    maxBoundaryRadiusForRows(start: number, end: number): number;
}
declare class FacadeComponentModelRowSegment {
    row: number;
    forward: boolean;
    restricted: boolean;
    droneSpatials: GeoSpatial[];
    totalDistance: number;
    constructor(row: number, restricted: boolean, droneSpatials: GeoSpatial[]);
}
export {};
