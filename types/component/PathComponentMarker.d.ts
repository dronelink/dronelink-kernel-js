import { Serializable } from "../core/Serializable";
import { TypeName, PathMarkerPositioning } from "../core/Enums";
import { Identifiable } from "../core/Identifiable";
import { Altitude } from "../core/Altitude";
import { MotionLimits6Optional } from "../core/MotionLimits6Optional";
import { Dictionary } from "../core/Dictionary";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { SubComponent } from "./SubComponent";
import { LimitFormatter } from "../core/Limits";
import { Node } from "../core/Node";
import { ListNode } from "../core/ListNode";
import { PathComponentElementNode } from "./PathComponentNode";
import { PointOfInterestReference } from "../core/PointOfInterest";
import { Interpolation } from "../core/Interpolation";
export declare class PathComponentMarker extends Identifiable implements Serializable, PointOfInterestReference {
    readonly type = TypeName.PathComponentMarker;
    distance: number;
    positioning: PathMarkerPositioning;
    interpolation: Interpolation;
    component: SubComponent | null;
    altitude: Altitude | null;
    pointOfInterestID: string | null;
    droneMotionLimits: MotionLimits6Optional | null;
    droneOrientation: Orientation3Optional | null;
    gimbalOrientations: Dictionary<Orientation3Optional> | null;
    applyJSON(json: any): void;
    constructor(distance?: number);
    node(parent: PathComponentMarkersNode, index: number): PathComponentMarkerNode;
    get interpolationPossible(): boolean;
    get interpolationPreferred(): boolean;
    toString: (formatters?: PathComponentMarkerFormatters) => string;
}
export declare type PathComponentMarkerFormatters = {
    horizontal: LimitFormatter;
    vertical: LimitFormatter;
    rotational: LimitFormatter;
};
export declare class PathComponentMarkersNode extends ListNode {
    constructor(parent: Node);
    get title(): string;
}
export declare class PathComponentMarkerNode extends PathComponentElementNode {
    readonly marker: PathComponentMarker;
    constructor(parent: Node, index: number, marker: PathComponentMarker);
    get subtitle(): string;
}
