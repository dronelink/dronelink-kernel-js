import { Serializable } from "../core/Serializable";
import { SubComponent } from "./SubComponent";
import { TypeName } from "../core/Enums";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { ComponentExecutionState } from "./ComponentExecutionState";
export declare class LabelComponent extends SubComponent implements Serializable {
    readonly type = TypeName.LabelComponent;
    label: string;
    applyJSON(json: any): void;
    constructor(label?: string);
    get subtitle(): string;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
