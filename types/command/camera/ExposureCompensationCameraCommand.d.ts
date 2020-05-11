import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraExposureCompensation, CommandReengagementTiming } from "../../core/Enums";
export declare class ExposureCompensationCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ExposureCompensationCameraCommand;
    exposureCompensation: CameraExposureCompensation;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
