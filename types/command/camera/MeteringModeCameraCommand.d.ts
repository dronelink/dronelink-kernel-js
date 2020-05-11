import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraMeteringMode, CommandReengagementTiming } from "../../core/Enums";
export declare class MeteringModeCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.MeteringModeCameraCommand;
    meteringMode: CameraMeteringMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
