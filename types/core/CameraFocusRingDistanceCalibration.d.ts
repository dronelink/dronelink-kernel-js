import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class CameraFocusCalibration implements Serializable {
    readonly type = TypeName.CameraFocusCalibration;
    distance: number;
    ringValueRange: number;
    minRingValues: number;
    ringValue: number | null;
    droneSerialNumber: string | null;
    applyJSON(json: any): void;
}
