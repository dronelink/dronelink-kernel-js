import { Engagement } from "./Engagement";
import { Identifiable } from "./Identifiable";
import { Message } from "./Message";
import { Disengagement } from "./Disengagement";
import { Datetime } from "./Datetime";
import { CameraFile } from "./CameraFile";
import { Context } from "./Context";
import { Timeline } from "./Timeline";
export declare abstract class Executable extends Identifiable {
    engagements: Engagement[];
    applyJSON(json: any): void;
    get engagementsTimeElapsed(): number;
    get engaged(): boolean;
    get reengaging(): boolean;
    engage(context: Context, datetime?: Datetime | null): Engagement | null;
    execute(dronelink: any, context: Context, datetime?: Datetime | null, timeline?: Timeline | null): any;
    disengage(context: Context, reason: Message): void;
    get disengagement(): Disengagement | null;
    addCameraFile(channel: number, cameraFile: CameraFile): void;
}
