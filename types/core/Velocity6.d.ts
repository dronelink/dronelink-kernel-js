import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Velocity3 } from "./Velocity3";
import { Vector2 } from "./Vector2";
export declare class Velocity6 implements Serializable {
    readonly type = TypeName.Velocity6;
    position: Velocity3;
    orientation: Velocity3;
    applyJSON(json: any): void;
    constructor(position?: Velocity3, orientation?: Velocity3);
    interpolate(velocity: Velocity6, interpolate: (start: number, finish: number) => number): Velocity6;
    toString: () => string;
    get horizontal(): Vector2;
    set horizontal(horizontal: Vector2);
    get vertical(): number;
    set vertical(vertical: number);
    get rotational(): number;
    set rotational(z: number);
}
