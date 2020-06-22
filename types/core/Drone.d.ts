import { GeoCoordinate } from "./GeoCoordinate";
import { Identifiable } from "./Identifiable";
import { GeoSpatial } from "./GeoSpatial";
import { Command } from "../command/Command";
import { Dictionary } from "./Dictionary";
import { CommandExecutionState } from "../command/CommandExecutionState";
import { TypeName, CommandExecutionStatus } from "./Enums";
import { Serializable } from "./Serializable";
import { Gimbal } from "./Gimbal";
import { Camera } from "./Camera";
import { Datetime } from "./Datetime";
import { FieldOfView } from "./FieldOfView";
import { Orientation3 } from "./Orientation3";
import { OrientationReferenceSources } from "./OrientationReferenceSources";
import { GeoLocation } from "./GeoLocation";
import { Altitude } from "./Altitude";
import { CameraFile } from "./CameraFile";
export declare class Drone extends Identifiable implements Serializable {
    readonly type = TypeName.Drone;
    model: string | null;
    serialNumber: string | null;
    takeoffCoordinate: GeoCoordinate;
    takeoffAltitude: Altitude | null;
    spatial: GeoSpatial;
    batteryPercent: number | null;
    obstacleDistance: number | null;
    cameras: Dictionary<Camera>;
    gimbals: Dictionary<Gimbal>;
    statelessCommands: Command[];
    statefulCommands: Command[];
    private commandExecutionStates;
    applyJSON(json: any): void;
    referenceSources(path: {
        x: number;
        z: number;
    }): OrientationReferenceSources;
    projectSpatial(datetime: Datetime): GeoSpatial;
    projectGimbalOrientation(channel: number, datetime: Datetime): Orientation3;
    camera(channel?: number): Camera;
    gimbal(channel?: number): Gimbal;
    gimbalOrientation(channel?: number): Orientation3;
    createCameraFile(channel: number, name: string, size: number, created: Datetime): CameraFile;
    addStatelessCommand(command: Command): void;
    addStatefulCommand(command: Command): void;
    removeStatefulCommand(command: Command): void;
    removeAllStatefulCommands(): void;
    commandExecutionState(id: string): CommandExecutionState;
    updateCommandExecutionState(id: string, status: CommandExecutionStatus, error?: string | null, datetime?: Datetime | null): void;
    statefulCommandsWhereStatus(status: CommandExecutionStatus): Command[];
    get takeoffLocation(): GeoLocation | null;
    get groundCoordinateInView(): GeoCoordinate;
    groundCoordinatesInView(fieldOfView: FieldOfView): GeoCoordinate[];
}