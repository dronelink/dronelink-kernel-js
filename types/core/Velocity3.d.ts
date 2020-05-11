import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Vector2 } from "./Vector2";
export declare class Velocity3 implements Serializable {
    readonly type = TypeName.Velocity3;
    x: number;
    y: number;
    z: number;
    applyJSON(json: any): void;
    constructor(x?: number, y?: number, z?: number);
    interpolate(velocity: Velocity3, interpolate: (start: number, finish: number) => number): Velocity3;
    get horizontal(): Vector2;
    set horizontal(horizontal: Vector2);
    get vertical(): number;
    set vertical(vertical: number);
    get pitch(): number;
    set pitch(x: number);
    get roll(): number;
    set roll(y: number);
    get yaw(): number;
    set yaw(z: number);
}
