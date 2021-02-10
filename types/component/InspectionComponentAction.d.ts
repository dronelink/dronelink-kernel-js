import { TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { Identifiable } from "../core/Identifiable";
import { SubComponent } from "./SubComponent";
import { ListNode } from "../core/ListNode";
import { Node } from "../core/Node";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { ListElementNode } from "../core/ListElementNode";
import { ComponentNode } from "./ComponentNode";
import { Dictionary } from "../core/Dictionary";
import { Descriptors } from "../core/Descriptors";
import { ComponentContext } from "./ComponentContext";
export declare class InspectionComponentAction extends Identifiable implements Serializable {
    readonly type = TypeName.InspectionComponentAction;
    descriptors: Descriptors;
    droneOrientation: Orientation3Optional | null;
    gimbalOrientations: Dictionary<Orientation3Optional> | null;
    component: SubComponent | null;
    applyJSON(json: any): void;
    node(parent: InspectionComponentActionsNode, index: number): InspectionComponentActionNode;
    title(index: number): string;
    abbreviation(index: number): string;
    toString: () => string;
}
export declare class InspectionComponentActionsNode extends ListNode {
    constructor(parent: Node);
    get title(): string;
}
export declare class InspectionComponentActionNode extends ListElementNode {
    readonly action: InspectionComponentAction;
    constructor(parent: Node, index: number, action: InspectionComponentAction);
    get inspectionPointNode(): ComponentNode;
    get inspectionComponentNode(): ComponentNode;
    get title(): string;
    get subtitle(): string;
}
export declare class InspectionComponentActionGroup {
    descriptors: Descriptors;
    droneOrientation: Orientation3Optional | null;
    gimbalOrientations: Dictionary<Orientation3Optional> | null;
    components: SubComponent[];
    constructor(action: InspectionComponentAction);
    compatible(action: InspectionComponentAction, droneOrientationThreshold: number): boolean;
    add(action: InspectionComponentAction): void;
    orientationsAchieved(context: ComponentContext): boolean;
    get gimbalOrientationsComponent(): SubComponent | null;
}
