import { Serializable } from "../core/Serializable";
import { TypeName } from "../core/Enums";
import { PointOfInterest } from "../core/PointOfInterest";
export declare class PlanReengagementRules implements Serializable {
    readonly type = TypeName.PlanReengagementRules;
    pointOfInterest: PointOfInterest | null;
    applyJSON(json: any): void;
}
