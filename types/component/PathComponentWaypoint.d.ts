import { Node } from "../core/Node";
import { ListNode } from "../core/ListNode";
import { Vector2 } from "../core/Vector2";
import { Serializable } from "../core/Serializable";
import { TypeName } from "../core/Enums";
import { Descriptors } from "../core/Descriptors";
import { Identifiable } from "../core/Identifiable";
import { PathComponentElementNode } from "./PathComponentNode";
export declare class PathComponentWaypoint extends Identifiable implements Serializable {
    readonly type = TypeName.PathComponentWaypoint;
    offset: Vector2;
    cornerRadius: number | null;
    descriptors: Descriptors;
    applyJSON(json: any): void;
    node(parent: PathComponentWaypointsNode, index: number): PathComponentWaypointNode;
    title(index: number): string;
    abbreviation(index: number): string;
}
export declare class PathComponentWaypointsNode extends ListNode {
    constructor(parent: Node);
    get title(): string;
}
export declare class PathComponentWaypointNode extends PathComponentElementNode {
    readonly waypoint: PathComponentWaypoint;
    constructor(parent: Node, index: number, waypoint: PathComponentWaypoint);
    get subtitle(): string;
}
