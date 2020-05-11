export declare class Kinematic {
    static t1(v: number, d: number): number;
    static t2(vi: number, a: number, d: number): number;
    static d1(v: number, t: number): number;
    static d2(vi: number, vf: number, t: number): number;
    static d3(vi: number, a: number, t: number): number;
    static d4(vi: number, vf: number, a: number): number;
    static v1(a: number, t: number): number;
    static v2(vi: number, a: number, t: number): number;
    static v3(vi: number, a: number, d: number): number;
    static v4(d: number, t: number): number;
    static tLine(vMax: number, aMin: number, aMax: number, dTotal: number, dTarget?: number): number;
    static vLine(vMax: number, aMin: number, aMax: number, dTotal: number, dTarget: number): number;
    static dampen(value: number, threshold: number, exponent?: number): number;
}
