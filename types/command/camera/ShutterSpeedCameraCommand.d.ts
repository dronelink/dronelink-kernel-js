import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraShutterSpeed, CommandReengagementTiming } from "../../core/Enums";
export declare class ShutterSpeedCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ShutterSpeedCameraCommand;
    shutterSpeed: CameraShutterSpeed;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
}
