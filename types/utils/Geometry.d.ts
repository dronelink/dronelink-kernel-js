import { Point2 } from "../core/Point2";
import { Line2 } from "../core/Line2";
export declare class Geometry {
    static angleDifferenceSigned(angle1: number, angle2: number): number;
    static roundedCorners(points: Point2[], radii: number[] | number | null, close?: boolean): Point2[][];
    static cardinalSplinePoint2(points: Point2[], close?: boolean, tension?: number, pointsPerSegment?: number): Point2[][];
    static cardinalSpline(points: number[], tension?: number, pointsPerSegment?: number, close?: boolean): Float32Array;
    static polygonSegements(points: Point2[]): Line2[];
    static polygonArea(points: Point2[]): number;
    static polygonPointInside(point: Point2, vs: Point2[]): boolean;
    static circlePointInside(circle: {
        center: Point2;
        radius: number;
    }, point: Point2): boolean;
    static lineClosestPoint(line: Line2, p?: Point2): Point2;
    static polygonClosestPoint(polygonPoints: Point2[], point: Point2): {
        point: Point2;
        segmentIndex: number;
    };
    static lineIntersectionLine(line1: Line2, line2: Line2): Point2 | null;
    static lineIntersectionsCircle(line: Line2, circle: {
        center: Point2;
        radius: number;
    }): Point2[] | null;
    static lineIntersectionsPolygon(line: Line2, polygonPoints: Point2[]): {
        point: Point2;
        segmentIndex: number;
    }[] | null;
    static convexHull(points: Point2[]): Point2[];
}
