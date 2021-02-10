import { TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { Identifiable } from "../core/Identifiable";
import { Descriptors } from "../core/Descriptors";
import { Altitude } from "../core/Altitude";
import { ListNode } from "../core/ListNode";
import { Node } from "../core/Node";
import { ListElementNode } from "../core/ListElementNode";
import { ComponentNode } from "./ComponentNode";
import { InspectionComponentAction, InspectionComponentActionGroup } from "./InspectionComponentAction";
import { MotionLimits6Optional } from "../core/MotionLimits6Optional";
import { LimitFormatter } from "../core/Limits";
import { Vector2 } from "../core/Vector2";
export declare class InspectionComponentInspectionPoint extends Identifiable implements Serializable {
    readonly type = TypeName.InspectionComponentInspectionPoint;
    descriptors: Descriptors;
    offset: Vector2;
    altitude: Altitude;
    droneMotionLimits: MotionLimits6Optional | null;
    passthrough: boolean;
    actions: InspectionComponentAction[];
    applyJSON(json: any): void;
    node(parent: InspectionComponentInspectionPointsNode, index: number): InspectionComponentInspectionPointNode;
    title(index: number): string;
    abbreviation(index: number): string;
    addAction(action: InspectionComponentAction): void;
    get actionGroups(): InspectionComponentActionGroup[];
    toString: (formatters?: InspectionComponentInspectionPointFormatters) => string;
}
export declare type InspectionComponentInspectionPointFormatters = {
    horizontal: LimitFormatter;
    vertical: LimitFormatter;
    rotational: LimitFormatter;
};
export declare class InspectionComponentInspectionPointsNode extends ListNode {
    constructor(parent: Node);
    get title(): string;
}
export declare class InspectionComponentInspectionPointNode extends ListElementNode {
    readonly inspectionPoint: InspectionComponentInspectionPoint;
    constructor(parent: Node, index: number, inspectionPoint: InspectionComponentInspectionPoint);
    get inspectionComponentNode(): ComponentNode;
    get title(): string;
    get subtitle(): string;
}
