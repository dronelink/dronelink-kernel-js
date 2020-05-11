import { Node } from "../core/Node";
import { ListNode } from "../core/ListNode";
import { Vector2 } from "../core/Vector2";
import { Serializable } from "../core/Serializable";
import { TypeName } from "../core/Enums";
import { Identifiable } from "../core/Identifiable";
import { FacadeComponentElementNode } from "./FacadeComponentNode";
export declare class FacadeComponentBoundaryPoint extends Identifiable implements Serializable {
    readonly type = TypeName.FacadeComponentBoundaryPoint;
    offset: Vector2;
    applyJSON(json: any): void;
    node(parent: FacadeComponentBoundaryPointsNode, index: number): FacadeComponentBoundaryPointNode;
    title(index: number): string;
    abbreviation(index: number): string;
}
export declare class FacadeComponentBoundaryPointsNode extends ListNode {
    constructor(parent: Node);
    get title(): string;
}
export declare class FacadeComponentBoundaryPointNode extends FacadeComponentElementNode {
    readonly boundaryPoint: FacadeComponentBoundaryPoint;
    constructor(parent: Node, index: number, boundaryPoint: FacadeComponentBoundaryPoint);
}
