import { Datetime, ExecutionEngine, ExecutionStatus } from "..";
import { ExecutionState } from "./ExecutionState";
import { SerializableAbstract } from "./SerializableAbstract";
export declare abstract class ExternalExecutionState extends ExecutionState implements SerializableAbstract {
    executionEngine: ExecutionEngine;
    revertDisengagment: boolean;
    applyJSON(json: any): void;
    constructor(id?: string | null, executionEngine?: ExecutionEngine);
    update(status: ExecutionStatus, error?: string | null, datetime?: Datetime | null, timeSinceLastExecution?: number): ExternalExecutionState;
}
