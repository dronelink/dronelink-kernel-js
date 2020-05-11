import { Node } from "../core/Node";
import { ListNode } from "../core/ListNode";
import { Vector2 } from "../core/Vector2";
import { Serializable } from "../core/Serializable";
import { TypeName } from "../core/Enums";
import { Identifiable } from "../core/Identifiable";
import { MapComponentElementNode } from "./MapComponentNode";
export declare class MapComponentBoundaryPoint extends Identifiable implements Serializable {
    readonly type = TypeName.MapComponentBoundaryPoint;
    offset: Vector2;
    applyJSON(json: any): void;
    node(parent: MapComponentBoundaryPointsNode, index: number): MapComponentBoundaryPointNode;
    title(index: number): string;
    abbreviation(index: number): string;
}
export declare class MapComponentBoundaryPointsNode extends ListNode {
    constructor(parent: Node);
    get title(): string;
}
export declare class MapComponentBoundaryPointNode extends MapComponentElementNode {
    readonly boundaryPoint: MapComponentBoundaryPoint;
    constructor(parent: Node, index: number, boundaryPoint: MapComponentBoundaryPoint);
}
