import { PayloadCommand } from "../PayloadCommand";
import { CameraMode } from "../../core/Enums";
export declare abstract class CameraCommand extends PayloadCommand {
    get requiredMode(): CameraMode | null;
    get requiredCapturing(): boolean | null;
}
