import { Serializable } from "./Serializable";
import { TypeName, OrientationZReference, OrientationXReference } from "./Enums";
import { Velocity3 } from "./Velocity3";
import { Orientation3 } from "./Orientation3";
import { OrientationReferenceSources } from "./OrientationReferenceSources";
import { OrientationReferenceTargets } from "./OrientationReferenceTargets";
export declare class Orientation3Optional implements Serializable {
    readonly type = TypeName.Orientation3Optional;
    x: number | null;
    xReference: OrientationXReference;
    y: number | null;
    z: number | null;
    zReference: OrientationZReference;
    constructor(x?: number | null, xReference?: OrientationXReference, y?: number | null, z?: number | null, zReference?: OrientationZReference);
    applyJSON(json: any): void;
    interpolate(orientation: Orientation3Optional, referenceSources: OrientationReferenceSources, referenceTargets: OrientationReferenceTargets, interpolate: (start: number, finish: number) => number): Orientation3Optional;
    convertReferences(sources: OrientationReferenceSources, targets?: OrientationReferenceTargets): void;
    velocity(orientation: Orientation3Optional, time: number): Velocity3;
    get pitch(): number | null;
    set pitch(x: number | null);
    get pitchReference(): OrientationXReference;
    set pitchReference(xReference: OrientationXReference);
    get roll(): number | null;
    set roll(y: number | null);
    get yaw(): number | null;
    set yaw(z: number | null);
    get yawReference(): OrientationZReference;
    set yawReference(zReference: OrientationZReference);
    toString: () => string;
    apply(orientation: Orientation3): Orientation3Optional;
    achieved(orientation: Orientation3Optional, threshold: number): boolean;
}
