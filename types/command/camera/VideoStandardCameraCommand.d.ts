import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraVideoStandard, CommandReengagementTiming, CameraMode } from "../../core/Enums";
export declare class VideoStandardCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.VideoStandardCameraCommand;
    videoStandard: CameraVideoStandard;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
