import { Point2 } from "./Point2";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class Vector2 implements Serializable {
    readonly type = TypeName.Vector2;
    direction: number;
    magnitude: number;
    applyJSON(json: any): void;
    constructor(direction?: number, magnitude?: number);
    copy(): Vector2;
    get x(): number;
    get y(): number;
    toPoint2(): Point2;
    inverse(): Vector2;
    add(vector: Vector2): Vector2;
    addToSelf(vector: Vector2): void;
    subtract(vector: Vector2): Vector2;
    subtractFromSelf(vector: Vector2): void;
    static center(vectors: Vector2[]): Vector2;
}
