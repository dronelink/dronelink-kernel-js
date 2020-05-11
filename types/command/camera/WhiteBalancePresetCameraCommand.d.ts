import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraWhiteBalancePreset, CommandReengagementTiming } from "../../core/Enums";
export declare class WhiteBalancePresetCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.WhiteBalancePresetCameraCommand;
    whiteBalancePreset: CameraWhiteBalancePreset;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
