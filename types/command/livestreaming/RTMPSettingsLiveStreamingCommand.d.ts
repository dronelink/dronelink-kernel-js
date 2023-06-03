import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { LiveStreamingCommand } from "./LiveStreamingCommand";
export declare class RTMPSettingsLiveStreamingCommand extends LiveStreamingCommand implements Serializable {
    readonly type = TypeName.RTMPSettingsLiveStreamingCommand;
    url: string | null;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
