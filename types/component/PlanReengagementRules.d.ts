import { Serializable } from "../core/Serializable";
import { TypeName } from "../core/Enums";
import { PointOfInterest } from "../core/PointOfInterest";
import { Message } from "../core/Message";
import { Dictionary } from "../core/Dictionary";
import { Orientation3Optional } from "../core/Orientation3Optional";
export declare class PlanReengagementRules implements Serializable {
    readonly type = TypeName.PlanReengagementRules;
    pointOfInterest: PointOfInterest | null;
    gimbalOrientations: Dictionary<Orientation3Optional> | null;
    confirmationMessage: Message | null;
    confirmationInstructionsImageUrl: string | null;
    applyJSON(json: any): void;
}
