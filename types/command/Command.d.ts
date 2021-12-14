import { Identifiable } from "../core/Identifiable";
import { CommandReengagementTiming, TypeName } from "../core/Enums";
export declare abstract class Command extends Identifiable {
    reengagementEnabled: boolean;
    applyJSON(json: any): void;
    sameType(command: Command): boolean;
    equivalent(command: Command): boolean;
    get title(): string;
    get subtitle(): string;
    get estimatedTime(): number;
    get verifiable(): boolean;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementPredicateCommandType(): TypeName | null;
}
