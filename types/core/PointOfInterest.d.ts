import { Node } from "./Node";
import { Identifiable } from "./Identifiable";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Descriptors } from "./Descriptors";
import { GeoReferencedOffset } from "./GeoReferencedOffset";
import { ListElementNode } from "./ListElementNode";
import { ListNode } from "./ListNode";
import { GeoSpatialSources } from "./GeoSpatialSources";
import { SourcedGeoSpatial } from "./SourcedGeoSpatial";
import { GeoSpatial } from "./GeoSpatial";
import { GeoCoordinate } from "./GeoCoordinate";
export declare class PointOfInterest extends Identifiable implements Serializable {
    readonly type = TypeName.PointOfInterest;
    referencedOffset: GeoReferencedOffset;
    descriptors: Descriptors;
    applyJSON(json: any): void;
    node(parent: Node, index: number): PointOfInterestNode;
    referenceSpatial(spatialSources: GeoSpatialSources, defaultReference: SourcedGeoSpatial): GeoSpatial;
    referenceCoordinate(spatialSources: GeoSpatialSources, defaultReference: SourcedGeoSpatial): GeoCoordinate;
    title(index: number): string;
    abbreviation(index: number): string;
}
export interface PointOfInterestReference {
    pointOfInterestID: string | null;
}
export declare class PointsOfInterestNode extends ListNode {
    private listAccessor;
    constructor(parent: Node, listAccessor: () => PointOfInterest[]);
    get title(): string;
    get list(): PointOfInterest[];
}
export declare class PointOfInterestNode extends ListElementNode {
    readonly pointOfInterest: PointOfInterest;
    constructor(parent: Node, index: number, pointOfInterest: PointOfInterest);
    get subtitle(): string;
}
