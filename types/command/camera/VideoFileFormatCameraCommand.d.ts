import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraVideoFileFormat, CommandReengagementTiming, CameraMode } from "../../core/Enums";
export declare class VideoFileFormatCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.VideoFileFormatCameraCommand;
    videoFileFormat: CameraVideoFileFormat;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
