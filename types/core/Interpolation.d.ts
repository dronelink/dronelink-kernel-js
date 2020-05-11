import { Serializable } from "./Serializable";
import { TypeName, InterpolationFunction } from "./Enums";
export declare class Interpolation implements Serializable {
    readonly type = TypeName.Interpolation;
    f: InterpolationFunction;
    sigmoidK: number;
    applyJSON(json: any): void;
    interpolate(start: number, finish: number, percent: number): number;
    static linear(start: number, finish: number, percent: number): number;
    static sigmoid(start: number, finish: number, percent: number, k: number): number;
}
