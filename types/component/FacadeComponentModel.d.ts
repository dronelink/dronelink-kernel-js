import { FacadeBoundaryFace, FacadePattern, CameraMode } from "../core/Enums";
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
export declare class FacadeComponentModel extends DroneMotionComponentModel<FacadeComponentModelSample> {
    static generate(context: ComponentContext, timeRequired: boolean | undefined, paths: Path[], parameters: FacadeComponentModelParameters): FacadeComponentModel | null;
    static createHorizontalSamples(paths: Path[], pathSampleDistance: number, parameters: FacadeComponentModelParameters, cameraCaptures: ComponentEstimateCameraCaptures): LinkedValue<FacadeComponentModelSample> | null;
    static createVerticalSamples(context: ComponentContext, paths: Path[], pathSampleDistance: number, parameters: FacadeComponentModelParameters, cameraCaptures: ComponentEstimateCameraCaptures): LinkedValue<FacadeComponentModelSample> | null;
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
    readonly approachAltitude: Altitude;
    readonly initialAltitude: Altitude;
    readonly finalAltitude: Altitude;
    readonly rows: number;
    readonly rowSpacing: number;
    readonly columns: number;
    readonly columnSpacing: number;
    readonly captureIntervalTime: number | null;
    readonly captureIntervalDistance: number | null;
    readonly cameraMode: CameraMode;
    readonly captureVerifyFileCreated: boolean;
    readonly pattern: FacadePattern;
    readonly boundaryFace: FacadeBoundaryFace;
    readonly boundaryClosed: boolean;
    readonly boundaryFaceOrientation: number;
    readonly gimbalOrientations: Dictionary<Orientation3Optional>;
    readonly droneOrientation: Orientation3Optional | null;
    readonly activeRestrictionZones: PlanRestrictionZone[];
    constructor(motionLimits: MotionLimits6, approachAltitude: Altitude, initialAltitude: Altitude, finalAltitude: Altitude, rows: number, rowSpacing: number, columns: number, columnSpacing: number, captureIntervalTime: number | null, captureIntervalDistance: number | null, cameraMode: CameraMode, captureVerifyFileCreated: boolean, pattern: FacadePattern, boundaryFace: FacadeBoundaryFace, boundaryClosed: boolean, boundaryFaceOrientation: number, gimbalOrientations: Dictionary<Orientation3Optional>, droneOrientation: Orientation3Optional | null, activeRestrictionZones: PlanRestrictionZone[]);
}
