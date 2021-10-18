import { Engagement } from "./Engagement";
import { Identifiable } from "./Identifiable";
import { Message } from "./Message";
import { Disengagement } from "./Disengagement";
import { Datetime } from "./Datetime";
import { CameraFile } from "./CameraFile";
import { Context } from "./Context";
import { Timeline } from "./Timeline";
import { GeoSpatial } from "./GeoSpatial";
import { ExecutionEngine } from "..";
export declare abstract class Executable extends Identifiable {
    engagements: Engagement[];
    applyJSON(json: any): void;
    get engagementsTimeElapsed(): number;
    get engaged(): boolean;
    get reengaging(): boolean;
    engage(context: Context, datetime?: Datetime | null): {
        engagement: Engagement;
        remainingSpatials: GeoSpatial[];
        reengagementSpatials: GeoSpatial[] | null;
    } | null;
    execute(context: Context, datetime?: Datetime | null, timeline?: Timeline | null, executionEngine?: ExecutionEngine): any;
    disengage(context: Context, reason: Message, overwrite?: boolean): void;
    get disengagement(): Disengagement | null;
    addCameraFile(channel: number, cameraFile: CameraFile): void;
}
