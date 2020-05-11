import { TypeName } from "./Enums";
import { Serializable } from "./Serializable";
export declare class Datetime implements Serializable {
    readonly type = TypeName.Datetime;
    value: Date;
    toJSON(): any;
    applyJSON(json: any): void;
    constructor(value?: Date);
    interpolate(datetime: Datetime, interpolate: (start: number, finish: number) => number): Datetime;
    elapsedTime(since: Datetime): number;
    increment(seconds: number): void;
}
