import { Serializable } from "../../core/Serializable";
import { TypeName, CommandReengagementTiming } from "../../core/Enums";
import { RTKCommand } from "./RTKCommand";
export declare class CustomNetworkSettingsRTKCommand extends RTKCommand implements Serializable {
    readonly type = TypeName.CustomNetworkSettingsRTKCommand;
    serverAddress: string | null;
    port: number | null;
    username: string | null;
    password: string | null;
    mountPoint: string | null;
    applyJSON(json: any): void;
    get subtitle(): string;
    get reengagementTiming(): CommandReengagementTiming;
}
