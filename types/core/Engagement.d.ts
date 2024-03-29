import { Serializable } from "./Serializable";
import { Identifiable } from "./Identifiable";
import { TypeName } from "./Enums";
import { Datetime } from "./Datetime";
import { GeoSpatial } from "./GeoSpatial";
import { Drone } from "./Drone";
import { Mission } from "./Mission";
import { Disengagement } from "./Disengagement";
import { User } from "./User";
import { Device } from "./Device";
import { Message } from "./Message";
import { ExecutionEngine } from "..";
export declare class Engagement extends Identifiable implements Serializable {
    readonly type = TypeName.Engagement;
    executionEngine: ExecutionEngine;
    engaged: Datetime;
    reengagement: Mission | null;
    lastUserSnapshot: User;
    startDeviceSpatial: GeoSpatial;
    lastDeviceSnapshot: Device;
    startDroneSpatial: GeoSpatial;
    lastDroneSnapshot: Drone;
    lastExecuted: Datetime | null;
    timeSinceLastExecution: number;
    totalExecutes: number;
    executeIntervalTarget: number;
    executeIntervalMax: number;
    executeDelayStrikesMax: number;
    disengagement: Disengagement | null;
    applyJSON(json: any): void;
    constructor(executionEngine?: ExecutionEngine, parameters?: EngagementParameters | null, engaged?: Datetime | null, user?: User, device?: Device, drone?: Drone, reengagement?: Mission | null);
    execute(datetime: Datetime, user: User, device: Device | undefined, drone: Drone): void;
    disengage(drone: Drone, reason: Message, overwrite?: boolean): void;
    get currentDatetime(): Datetime;
    get timeElapsed(): number;
}
export declare class EngagementParameters implements Serializable {
    readonly type = TypeName.EngagementParameters;
    executeFrequencyTarget: number;
    executeFrequencyMin: number;
    executeDelayStrikesMax: number;
    applyJSON(json: any): void;
}
