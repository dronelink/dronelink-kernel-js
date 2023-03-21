import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Point2 } from "./Point2";
import { Vector2 } from "./Vector2";
export declare class Line2 implements Serializable {
    readonly type = TypeName.Point2;
    private static readonly FieldsEqualityErrorTolerance;
    a: Point2;
    b: Point2;
    applyJSON(json: any): void;
    constructor(a?: Point2, b?: Point2);
    get length(): number;
    get direction(): number;
    get slope(): number | null;
    get yIntercept(): number | null;
    add(vector: Vector2): Line2;
    pointExistsOnLine(point: Point2): boolean;
    directionEqualWithTolerance(line: Line2): boolean;
    lengthen(a: number, b?: number | null): Line2;
    interpolate(distance: number): Point2;
}
