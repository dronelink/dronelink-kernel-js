import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { LiveStreamingCommand } from "./LiveStreamingCommand";
export declare class ModuleLiveStreamingCommand extends LiveStreamingCommand implements Serializable {
    readonly type = TypeName.ModuleLiveStreamingCommand;
    enabled: boolean;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
