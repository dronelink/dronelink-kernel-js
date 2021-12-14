import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { RemoteControllerCommand } from "./RemoteControllerCommand";
export declare class TargetGimbalChannelRemoteControllerCommand extends RemoteControllerCommand implements Serializable {
    readonly type = TypeName.TargetGimbalChannelRemoteControllerCommand;
    targetGimbalChannel: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
