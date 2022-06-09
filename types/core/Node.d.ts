import { ComponentContext } from "../component/ComponentContext";
import { GeoCoordinate } from "./GeoCoordinate";
import { Identifiable } from "./Identifiable";
export declare abstract class Node extends Identifiable {
    nextOrdinal: () => number;
    readonly parent: Node | null;
    readonly children: Node[];
    ordinal: number | null;
    remove: NodeRemove | null;
    inserts: NodeAdd[];
    appends: NodeAdd[];
    emptyChildrenNavigationEnabled: boolean;
    propertiesEditorDisabled: boolean;
    constructor(id: string, parent: Node | null);
    get ordinalDisplay(): string;
    get title(): string;
    get subtitle(): string;
    get depth(): number;
    get root(): Node;
    get ancestors(): Node[];
    get descendants(): Node[];
    get descendantsDepthFirst(): Node[];
    find(id: string): Node | null;
    findAncestor(id: string): Node | null;
    findDescendant(id: string): Node | null;
    descendantAllowed(descendant: any): boolean;
    boundsCoordinates(context: ComponentContext): GeoCoordinate[];
}
export declare type NodeRemove = () => void;
export declare type NodeAdd = {
    title: string;
    tooltip: string | null;
    execute: (child: any) => void;
};
