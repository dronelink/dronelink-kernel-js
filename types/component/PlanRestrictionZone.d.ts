import { Zone, ZonePath } from "../core/Zone";
import { Identifiable } from "../core/Identifiable";
import { Serializable } from "../core/Serializable";
import { TypeName } from "../core/Enums";
import { Descriptors } from "../core/Descriptors";
import { MotionLimits6Optional } from "../core/MotionLimits6Optional";
import { DistanceTolerance } from "../core/DistanceTolerance";
import { Node } from "../core/Node";
import { ListNode } from "../core/ListNode";
import { ComponentContext, GeoSpatial } from "..";
export declare class PlanRestrictionZone extends Identifiable implements Serializable {
    readonly type = TypeName.PlanRestrictionZone;
    descriptors: Descriptors;
    zone: Zone;
    minApplicableProximity: DistanceTolerance;
    droneMotionLimits: MotionLimits6Optional;
    droneMotionErrorTolerance: DistanceTolerance | null;
    applyJSON(json: any): void;
    static restrictionZonePath(context: ComponentContext, restrictionZones: PlanRestrictionZone[], start: GeoSpatial, end: GeoSpatial): ZonePath | null;
    static spatialInside(context: ComponentContext, restrictionZones: PlanRestrictionZone[], spatial: GeoSpatial): PlanRestrictionZone[] | null;
}
export declare class PlanRestrictionZonesNode extends ListNode {
    private listAccessor;
    constructor(parent: Node, listAccessor: () => PlanRestrictionZone[]);
    get title(): string;
    get list(): PlanRestrictionZone[];
}
export declare class PlanRestrictionZoneNode extends ListNode {
    readonly planRestrictionZone: PlanRestrictionZone;
    readonly index: number;
    constructor(parent: Node, index: number, planRestrictionZone: PlanRestrictionZone);
    get title(): string;
    get subtitle(): string;
}
