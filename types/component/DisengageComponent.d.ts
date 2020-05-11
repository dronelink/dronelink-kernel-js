import { SubComponent } from "./SubComponent";
import { SerializableAbstract } from "../core/SerializableAbstract";
import { TypeName } from "../core/Enums";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { ComponentExecutionState } from "./ComponentExecutionState";
import { Message } from "../core/Message";
export declare class DisengageComponent extends SubComponent implements SerializableAbstract {
    readonly type = TypeName.DisengageComponent;
    reason: Message;
    applyJSON(json: any): void;
    get subtitle(): string;
    get exclusiveReadonly(): boolean;
    get exclusiveExecution(): boolean;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
