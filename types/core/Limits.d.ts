import { Serializable } from "./Serializable";
import { TypeName } from "../core/Enums";
import { FormattedValue } from "../utils/Format";
export declare class Limits implements Serializable {
    readonly type = TypeName.Limits;
    max: number;
    min: number;
    applyJSON(json: any): void;
    constructor(max?: number, min?: number);
    bound(value: number): number;
    valid(value: number): boolean;
    interpolate(limits: Limits, interpolate: (start: number, finish: number) => number): Limits;
    toString(formatter?: LimitFormatter | null, include?: {
        min: boolean;
        max: boolean;
    }): string;
}
export declare type LimitFormatter = (value: number) => FormattedValue;
