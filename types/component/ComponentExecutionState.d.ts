import { ComponentExecutionStatus, TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { Datetime } from "../core/Datetime";
import { Message } from "../core/Message";
import { Identifiable } from "../core/Identifiable";
export declare class ComponentExecutionState extends Identifiable implements Serializable {
    readonly type = TypeName.ComponentExecutionState;
    status: ComponentExecutionStatus;
    progress: number;
    duration: number;
    started: Datetime | null;
    finished: Datetime | null;
    error: string | null;
    messages: Message[];
    private cache;
    toJSON(): any;
    applyJSON(json: any): void;
    constructor(id?: string | null);
    get complete(): boolean;
    cachedData(key: string, defaultValue?: (() => any) | null): any;
    clearCachedData(key: string): void;
    update(status: ComponentExecutionStatus, error?: string | null, datetime?: Datetime | null, timeSinceLastExecution?: number): ComponentExecutionState;
}
