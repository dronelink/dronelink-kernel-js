import { Node } from "./Node";
import { Vector2 } from "./Vector2";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Identifiable } from "./Identifiable";
import { ListElementNode } from "./ListElementNode";
import { Zone } from "./Zone";
export declare class ZoneBoundaryPoint extends Identifiable implements Serializable {
    readonly type = TypeName.ZoneBoundaryPoint;
    offset: Vector2;
    applyJSON(json: any): void;
    title(index: number): string;
    abbreviation(index: number): string;
}
export declare class ZoneBoundaryPointNode extends ListElementNode {
    readonly zone: Zone;
    readonly boundaryPoint: ZoneBoundaryPoint;
    constructor(parent: Node, zone: Zone, index: number, boundaryPoint: ZoneBoundaryPoint);
}
