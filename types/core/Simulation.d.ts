import { GeoCoordinate } from "./GeoCoordinate";
import { TypeName } from "./Enums";
import { Datetime } from "./Datetime";
import { MotionLimits6 } from "./MotionLimits6";
import { Message } from "./Message";
import { Timeline } from "./Timeline";
import { Executable } from "./Executable";
import { Context } from "./Context";
import { Vector2 } from "./Vector2";
import { Drone } from "./Drone";
import { PlanComponent } from "../component/PlanComponent";
import { Engagement } from "./Engagement";
import { GeoSpatial } from "./GeoSpatial";
export declare class Simulation {
    updateInterval: number;
    executeIntervalTarget: number;
    preventThreadStarvation: boolean;
    context: Context;
    droneMotionLimits: MotionLimits6;
    rate: number | null;
    started: Datetime | null;
    millisSinceStart: number;
    executable: Executable | null;
    engaged: boolean;
    timeline: Timeline | null;
    wind: Vector2;
    private cameraFilesByChannel;
    private executionListeners;
    constructor(drone: Drone, takeoffCoordinate?: GeoCoordinate, executionListener?: (simulation: Simulation) => void, preview?: boolean, metadata?: any);
    get currentDatetime(): Datetime;
    start(): void;
    load(executable: Executable, timeline?: Timeline | null): void;
    addExecutionListener(callback: (simulation: Simulation) => void): void;
    engage(executable?: Executable | null, timeline?: Timeline | null): {
        engagement: Engagement;
        remainingSpatials: GeoSpatial[];
        reengagementSpatials: GeoSpatial[] | null;
    } | null;
    disengage(reason: Message): void;
    stop(): void;
    private generateCameraFile;
    private execute;
    private processCommands;
    private applyCommandStart;
    private applyCommandFinish;
    private applyDroneCommandStart;
    private applyDroneCommandFinish;
    private applyRemoteControllerCommandStart;
    private applyRemoteControllerCommandFinish;
    private applyPayloadCommandStart;
    private applyPayloadCommandFinish;
    private applyCameraCommandStart;
    private applyCameraCommandFinish;
    private applyGimbalCommandStart;
    private applyGimbalCommandFinish;
    toPlan(type: TypeName, options: any): PlanComponent;
}
