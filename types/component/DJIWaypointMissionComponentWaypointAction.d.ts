import { Node } from "../core/Node";
import { Serializable } from "../core/Serializable";
import { Identifiable } from "../core/Identifiable";
import { TypeName, DJIWaypointActionType } from "../core/Enums";
import { ListNode } from "../core/ListNode";
import { ComponentNode } from "./ComponentNode";
import { ListElementNode } from "../core/ListElementNode";
import { SubComponent } from "..";
export declare class DJIWaypointMissionComponentWaypointAction extends Identifiable implements Serializable {
    readonly type = TypeName.DJIWaypointMissionComponentWaypointAction;
    actionType: DJIWaypointActionType;
    param: number;
    applyJSON(json: any): void;
    node(parent: DJIWaypointMissionComponentWaypointActionsNode, index: number): DJIWaypointMissionComponentWaypointActionNode;
    title(index: number): string;
    abbreviation(index: number): string;
    toString: () => string;
    toSubComponent(): SubComponent | null;
}
export declare class DJIWaypointMissionComponentWaypointActionsNode extends ListNode {
    constructor(parent: Node);
    get title(): string;
}
export declare class DJIWaypointMissionComponentWaypointActionNode extends ListElementNode {
    readonly action: DJIWaypointMissionComponentWaypointAction;
    constructor(parent: Node, index: number, action: DJIWaypointMissionComponentWaypointAction);
    get waypointNode(): ListElementNode;
    get djiWaypointMissionComponentNode(): ComponentNode;
    get title(): string;
    get subtitle(): string;
}
