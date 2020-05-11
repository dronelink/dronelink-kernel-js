import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName } from "../../core/Enums";
export declare class StopCaptureCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.StopCaptureCameraCommand;
    applyJSON(json: any): void;
    get estimatedTime(): number;
    get verifiable(): boolean;
}
