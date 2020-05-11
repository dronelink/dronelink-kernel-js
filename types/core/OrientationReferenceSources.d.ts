import { OrientationZReferenceSources } from "./OrientationZReferenceSources";
import { OrientationXReferenceSources } from "./OrientationXReferenceSources";
export declare class OrientationReferenceSources {
    x: OrientationXReferenceSources;
    z: OrientationZReferenceSources;
    constructor(x?: OrientationXReferenceSources, z?: OrientationZReferenceSources);
    static fromZ(z: number): OrientationReferenceSources;
}
