import { TypeName, CameraCaptureType } from "./Enums";
import { Serializable } from "./Serializable";
import { CommandComponent } from "../component/CommandComponent";
export declare class CameraCaptureConfiguration implements Serializable {
    readonly type = TypeName.CameraCaptureConfiguration;
    channel: number;
    captureType: CameraCaptureType;
    applyJSON(json: any): void;
    get commandComponents(): CommandComponent[];
}
