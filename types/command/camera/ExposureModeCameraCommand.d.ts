import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraExposureMode, CommandReengagementTiming } from "../../core/Enums";
export declare class ExposureModeCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ExposureModeCameraCommand;
    exposureMode: CameraExposureMode;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementReplaceable(): boolean;
}
