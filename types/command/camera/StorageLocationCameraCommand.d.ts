import { CameraCommand } from "./CameraCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName, CameraStorageLocation, CommandReengagementTiming } from "../../core/Enums";
export declare class StorageLocationCameraCommand extends CameraCommand implements Serializable {
    readonly type = TypeName.StorageLocationCameraCommand;
    storageLocation: CameraStorageLocation;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
    get requiredCapturing(): boolean | null;
}
