import { Serializable } from "../core/Serializable";
import { TypeName } from "../core/Enums";
import { PointOfInterest } from "../core/PointOfInterest";
import { Message } from "../core/Message";
export declare class PlanReengagementRules implements Serializable {
    readonly type = TypeName.PlanReengagementRules;
    pointOfInterest: PointOfInterest | null;
    confirmationMessage: Message | null;
    confirmationInstructionsImageUrl: string | null;
    applyJSON(json: any): void;
}
