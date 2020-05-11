import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
export declare class ExposureCompensationStepCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ExposureCompensationStepCameraCommand;
    exposureCompensationSteps: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
