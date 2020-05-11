import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class DistanceTolerance implements Serializable {
    readonly type = TypeName.DistanceTolerance;
    horizontal: number;
    vertical: number;
    constructor(horizontal?: number, vertical?: number);
    valid(horizontal: number, vertical: number): boolean;
    validHorizontal(horizontal: number): boolean;
    validVertical(vertical: number): boolean;
    applyJSON(json: any): void;
}
