import { Serializable } from "../core/Serializable";
import { CommandExecutionStatus, TypeName } from "../core/Enums";
import { Identifiable } from "../core/Identifiable";
import { Datetime } from "../core/Datetime";
export declare class CommandExecutionState extends Identifiable implements Serializable {
    readonly type = TypeName.CommandExecutionState;
    status: CommandExecutionStatus;
    started: Datetime | null;
    finished: Datetime | null;
    error: string | null;
    applyJSON(json: any): boolean;
    constructor(id?: string | null);
    update(status: CommandExecutionStatus, error?: string | null, datetime?: Datetime | null): CommandExecutionState;
}
