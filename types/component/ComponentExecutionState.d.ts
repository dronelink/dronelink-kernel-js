import { ExecutionStatus, TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { Datetime } from "../core/Datetime";
import { ExecutionState } from "../core/ExecutionState";
export declare class ComponentExecutionState extends ExecutionState implements Serializable {
    readonly type = TypeName.ComponentExecutionState;
    private cache;
    toJSON(): any;
    applyJSON(json: any): void;
    cachedData(key: string, defaultValue?: (() => any) | null): any;
    clearCachedData(key: string): void;
    update(status: ExecutionStatus, error?: string | null, datetime?: Datetime | null, timeSinceLastExecution?: number): ComponentExecutionState;
}
