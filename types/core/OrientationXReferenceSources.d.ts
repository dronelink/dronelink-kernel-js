import { OrientationXReference } from "./Enums";
export declare class OrientationXReferenceSources {
    path: number;
    constructor(path?: number);
    value(zReference: OrientationXReference): number;
}
