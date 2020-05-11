import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraAperture, CommandReengagementTiming } from "../../core/Enums";
export declare class ApertureCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ApertureCameraCommand;
    aperture: CameraAperture;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
