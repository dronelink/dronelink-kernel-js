import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraVideoFileCompressionStandard, CommandReengagementTiming, CameraMode } from "../../core/Enums";
export declare class VideoFileCompressionStandardCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.VideoFileCompressionStandardCameraCommand;
    videoFileCompressionStandard: CameraVideoFileCompressionStandard;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
