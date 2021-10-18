import { ExecutionStatus } from "../core/Enums";
import { Datetime } from "../core/Datetime";
import { Message } from "../core/Message";
import { Identifiable } from "../core/Identifiable";
import { SerializableAbstract } from "./SerializableAbstract";
export declare abstract class ExecutionState extends Identifiable implements SerializableAbstract {
    status: ExecutionStatus;
    progress: number;
    duration: number;
    started: Datetime | null;
    finished: Datetime | null;
    error: string | null;
    messages: Message[];
    applyJSON(json: any): void;
    get complete(): boolean;
    update(status: ExecutionStatus, error?: string | null, datetime?: Datetime | null, timeSinceLastExecution?: number): ExecutionState;
}
