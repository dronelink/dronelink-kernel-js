import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraFileIndexMode, CommandReengagementTiming } from "../../core/Enums";
export declare class FileIndexModeCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.FileIndexModeCameraCommand;
    fileIndexMode: CameraFileIndexMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
