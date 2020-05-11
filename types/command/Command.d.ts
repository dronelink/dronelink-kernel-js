import { Identifiable } from "../core/Identifiable";
import { CommandReengagementTiming } from "../core/Enums";
export declare abstract class Command extends Identifiable {
    get title(): string;
    get subtitle(): string;
    get estimatedTime(): number;
    get verifiable(): boolean;
    get reengagementTiming(): CommandReengagementTiming;
    get reengagementReplaceable(): boolean;
}
