import { OrientationZReference } from "./Enums";
export declare class OrientationZReferenceSources {
    course: number;
    heading: number;
    path: number;
    constructor(course?: number, heading?: number, path?: number);
    value(zReference: OrientationZReference): number;
}
