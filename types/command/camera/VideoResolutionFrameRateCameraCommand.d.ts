import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraVideoResolution, CommandReengagementTiming, CameraMode, CameraVideoFrameRate, CameraVideoFieldOfView } from "../../core/Enums";
export declare class VideoResolutionFrameRateCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.VideoResolutionFrameRateCameraCommand;
    videoResolution: CameraVideoResolution;
    videoFrameRate: CameraVideoFrameRate;
    videoFieldOfView: CameraVideoFieldOfView;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
