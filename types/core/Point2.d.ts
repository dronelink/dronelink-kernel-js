import { Vector2 } from "./Vector2";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
export declare class Point2 implements Serializable {
    readonly type = TypeName.Point2;
    x: number;
    y: number;
    applyJSON(json: any): void;
    constructor(x?: number, y?: number);
    get direction(): number;
    get magnitude(): number;
    toVector2(): Vector2;
    distance(point: Point2): number;
    midPoint(point: Point2): Point2;
    interpolateDistance(point: Point2, distance: number): Point2;
    interpolate(point: Point2, percent: number): Point2;
    static center(points: Point2[]): Point2;
    static boundingBox(points: Point2[], rotation?: number, scale?: number): BoundingBox2;
    static compare(a: Point2, b: Point2): number;
}
export declare type BoundingBox2 = {
    topLeft: Point2;
    topRight: Point2;
    bottomLeft: Point2;
    bottomRight: Point2;
};
