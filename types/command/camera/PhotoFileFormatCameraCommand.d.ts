import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraPhotoFileFormat, CommandReengagementTiming, CameraMode } from "../../core/Enums";
export declare class PhotoFileFormatCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.PhotoFileFormatCameraCommand;
    photoFileFormat: CameraPhotoFileFormat;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
