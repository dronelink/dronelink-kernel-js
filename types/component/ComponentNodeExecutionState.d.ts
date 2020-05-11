import { ComponentNode } from "./ComponentNode";
import { ComponentExecutionState } from "./ComponentExecutionState";
export declare class ComponentNodeExecutionState {
    readonly node: ComponentNode;
    readonly state: ComponentExecutionState;
    constructor(node: ComponentNode, state: ComponentExecutionState);
}
