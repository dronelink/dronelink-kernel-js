import { TypeName } from "./Enums";
import { GeoCoordinate } from "./GeoCoordinate";
import { Descriptors } from "./Descriptors";
import { Serializable } from "./Serializable";
import { Dictionary } from "./Dictionary";
import { UserInterfaceSettings } from "./UserInterfaceSettings";
import { Engagement } from "./Engagement";
import { CameraFile } from "./CameraFile";
import { Message } from "./Message";
import { Context } from "./Context";
import { Datetime } from "./Datetime";
import { Executable } from "./Executable";
import { Timeline } from "./Timeline";
import { MessageGroup } from "./MessageGroup";
import { GeoSpatial } from "./GeoSpatial";
import { Orientation3Optional } from "./Orientation3Optional";
import { Velocity3 } from "./Velocity3";
import { VelocityGimbalCommand } from "../command/gimbal/VelocityGimbalCommand";
import { VelocityDroneCommand } from "../command/drone/VelocityDroneCommand";
import { MotionLimits6 } from "./MotionLimits6";
import { Velocity6 } from "./Velocity6";
import { Func, FuncInput } from "./Func";
import { Input } from "./Input";
import * as Dronelink from "../index";
export declare class Mode extends Executable implements Serializable {
    readonly type = TypeName.Mode;
    func: Func | null;
    coordinate: GeoCoordinate;
    descriptors: Descriptors;
    userInterfaceSettings: UserInterfaceSettings | null;
    inputs: ModeInput[];
    executable: string;
    executionDuration: number;
    cameraFiles: Dictionary<CameraFile[]>;
    state: any;
    summaryMessage: Message | null;
    executingMessageGroups: MessageGroup[];
    target: GeoSpatial | null;
    visibleCoordinates: GeoCoordinate[] | null;
    toJSON(): any;
    applyJSON(json: any): void;
    get title(): string;
    private get inputsVariableValuesNamed();
    private evaluate;
    validateSyntax(): void;
    modeExecuteContext(context?: Context, engagement?: Engagement): ModeExecuteContext;
    engage(context: Context, datetime?: Datetime | null): {
        engagement: Engagement;
        remainingSpatials: GeoSpatial[];
        reengagementSpatials: GeoSpatial[] | null;
    } | null;
    execute(context: Context, datetime?: Datetime | null, timeline?: Timeline | null): any;
    addDroneVelocityCommand(context: ModeExecuteContext, limits: MotionLimits6, velocity: Velocity6, heading?: number | null): VelocityDroneCommand;
    addGimbalVelocityCommand(context: ModeExecuteContext, channel: number, orientationTarget: Orientation3Optional, referencePath: {
        x: number;
        z: number;
    }, baseVelocity?: Velocity3): VelocityGimbalCommand;
    addCameraFile(channel: number, cameraFile: CameraFile): void;
}
export declare class ModeInput extends Input implements Serializable {
    readonly type = TypeName.ModeInput;
    static from(funcInput: FuncInput): Dronelink.ModeInput;
    applyJSON(json: any): void;
}
declare class ModeExecuteContext extends Context {
    readonly engagement: Engagement;
    constructor(engagement: Engagement);
    elapsedTime(since: Datetime): number;
}
export {};
