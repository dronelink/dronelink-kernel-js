import { Serializable } from "./Serializable";
import { TypeName, CameraMode, CameraPhotoMode } from "./Enums";
import { Dictionary } from "./Dictionary";
import { Command } from "../command/Command";
import { CommandExecutionState } from "../command/CommandExecutionState";
import { Datetime } from "./Datetime";
import { Device } from "./Device";
import { Drone } from "./Drone";
import { ComponentExecutionState } from "../component/ComponentExecutionState";
import { Descriptors } from "./Descriptors";
import { CameraFile } from "./CameraFile";
import { Camera } from "./Camera";
import { Context } from "./Context";
import { Executable } from "./Executable";
import { MessageGroup } from "./MessageGroup";
export declare class Timeline implements Serializable {
    readonly type = TypeName.Timeline;
    frames: TimelineFrame[];
    commands: Dictionary<TimelineCommand>;
    captures: TimelineCameraCapture[];
    applyJSON(json: any): void;
    addFrame(executable: Executable, context: Context, elapsedTime: number): TimelineFrame;
    get firstFrame(): TimelineFrame | null;
    get lastFrame(): TimelineFrame | null;
    get duration(): number;
    getFrame(progress: number): TimelineFrame | null;
    getFrameIndex(progress: number): number | null;
    addCapture(camera: Camera, cameraFile: CameraFile, duration?: number): TimelineCameraCapture;
    updateCommandExecutionState(command: Command, executionState: CommandExecutionState): TimelineCommand;
    toKML(descriptors: Descriptors, takeoffElevation?: number): string;
}
export declare class TimelineFrame implements Serializable {
    readonly type = TypeName.TimelineFrame;
    elapsedTime: number;
    distanceTravelledHorizontal: number;
    datetime: Datetime;
    device: Device;
    drone: Drone;
    executingComponentStates: Dictionary<ComponentExecutionState>;
    executingMessageGroups: MessageGroup[];
    applyJSON(json: any): void;
    constructor(elapsedTime?: number, distanceTravelledHorizontal?: number, datetime?: Datetime, device?: Device, drone?: Drone, executingComponentStates?: Dictionary<ComponentExecutionState>, executingMessageGroups?: MessageGroup[]);
}
export declare class TimelineFrameGroup {
    frames: TimelineFrame[];
    distance: number;
    addFrame(frame: TimelineFrame): void;
    addFrameGroup(frameGroup: TimelineFrameGroup): void;
}
export declare class TimelineCommand implements Serializable {
    readonly type = TypeName.TimelineFrame;
    command: Command;
    executionState: CommandExecutionState;
    applyJSON(json: any): void;
    constructor(command?: Command, executionState?: CommandExecutionState);
}
export declare class TimelineCameraCapture implements Serializable {
    readonly type = TypeName.TimelineCameraCapture;
    frameIndex: number;
    channel: number;
    mode: CameraMode;
    photoMode: CameraPhotoMode;
    started: Datetime;
    finished: Datetime | null;
    file: CameraFile;
    applyJSON(json: any): void;
    constructor(frameIndex?: number, channel?: number, mode?: CameraMode, photoMode?: CameraPhotoMode, started?: Datetime, finished?: Datetime | null, file?: CameraFile);
    get title(): string;
    get subtitle(): string;
}
