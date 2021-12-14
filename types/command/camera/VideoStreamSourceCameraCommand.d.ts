import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraVideoStreamSource, CommandReengagementTiming } from "../../core/Enums";
export declare class VideoStreamSourceCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.VideoStreamSourceCameraCommand;
    videoStreamSource: CameraVideoStreamSource;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
