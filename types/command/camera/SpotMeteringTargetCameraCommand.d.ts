import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { Point2 } from "../../core/Point2";
export declare class SpotMeteringTargetCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.SpotMeteringTargetCameraCommand;
    spotMeteringTarget: Point2;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
}
