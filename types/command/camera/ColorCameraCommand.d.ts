import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraColor, CommandReengagementTiming } from "../../core/Enums";
export declare class ColorCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.ColorCameraCommand;
    color: CameraColor;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
