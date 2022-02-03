export declare class Quaternion {
    w: number;
    x: number;
    y: number;
    z: number;
    static fromEuler(roll: number, pitch: number, yaw: number): Quaternion;
    constructor(w?: number, x?: number, y?: number, z?: number);
    toEuler(): {
        roll: number;
        pitch: number;
        yaw: number;
    };
    multiply(quaternion: Quaternion): Quaternion;
}
