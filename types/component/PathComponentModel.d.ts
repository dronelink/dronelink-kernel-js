import { PathComponentMarker } from "./PathComponentMarker";
import { LinkedValue } from "../core/LinkedValue";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { MotionLimits6 } from "../core/MotionLimits6";
import { GeoSpatial } from "../core/GeoSpatial";
import { SourcedGeoSpatial } from "../core/SourcedGeoSpatial";
import { Dictionary } from "../core/Dictionary";
import { DroneMotionComponentModelSample, DroneMotionComponentModel } from "./DroneMotionComponent";
import { TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { Velocity3 } from "../core/Velocity3";
import { Path } from "../core/Path";
import { OrientationReferenceSources } from "../core/OrientationReferenceSources";
import { GeoLocation } from "../core/GeoLocation";
import { ComponentContext } from "./ComponentContext";
import { PlanRestrictionZone } from "..";
import { PathComponentWaypoint } from "./PathComponentWaypoint";
import { Message } from "../core/Message";
export declare class PathComponentModel extends DroneMotionComponentModel<PathComponentModelSample> {
    parameters: PathComponentModelParameters;
    constructor(sample: LinkedValue<PathComponentModelSample>, parameters: PathComponentModelParameters);
    static generate(context: ComponentContext, parameters: PathComponentModelParameters, positionOnly: boolean, alignmentOrientationOnly: boolean): PathComponentModel | null;
    static createSamples(context: ComponentContext, parameters: PathComponentModelParameters, positionOnly: boolean, alignmentOrientationOnly: boolean): LinkedValue<PathComponentModelSample> | null;
}
export declare class PathComponentModelSample extends DroneMotionComponentModelSample implements Serializable {
    readonly type = TypeName.PathComponentModelSample;
    segment: number;
    pathDistance: number;
    applyJSON(json: any): void;
    constructor(segment?: number, pathDistance?: number, droneSpatial?: GeoSpatial, droneMotionLimits?: MotionLimits6, gimbalOrientations?: Dictionary<Orientation3Optional>, gimbalVelocities?: Dictionary<Velocity3>, message?: Message | null);
    interpolate(next: PathComponentModelSample, percent: number, referenceSources: OrientationReferenceSources): PathComponentModelSample;
}
export declare class PathComponentModelParameter<V> {
    value: V;
    marker: PathComponentMarker | null;
    constructor(value: V, marker?: PathComponentMarker | null);
    get distance(): number;
}
export declare class PathComponentModelParameterLinked<V> extends LinkedValue<PathComponentModelParameter<V>> {
    constructor(value: V, marker?: PathComponentMarker | null, previous?: PathComponentModelParameterLinked<V> | null);
    get nextMarker(): PathComponentMarker | null;
    interpolationPercentForDistance(distance: number): number;
}
export declare class PathComponentModelParameterAltitude extends PathComponentModelParameterLinked<number> {
    valueInterpolated(distance: number): number;
}
export declare class PathComponentModelParameterOrientation3Optional extends PathComponentModelParameterLinked<Orientation3Optional> {
    valueInterpolated(distance: number, referenceSources: OrientationReferenceSources): Orientation3Optional;
}
export declare class PathComponentModelParameterMotionLimits6 extends PathComponentModelParameterLinked<MotionLimits6> {
    valueInterpolated(distance: number): MotionLimits6;
}
export declare class PathComponentModelParameterPointOfInterest extends PathComponentModelParameterLinked<GeoLocation> {
    valueInterpolated(distance: number): GeoLocation;
}
export declare class PathComponentModelParameters {
    readonly reference: SourcedGeoSpatial;
    readonly maxSampleDistance: number;
    readonly path: Path;
    readonly activeRestrictionZones: PlanRestrictionZone[];
    readonly markersResolved: PathComponentModelMarkerResolved[];
    readonly approachAltitudeATL: number;
    private _distance;
    private _altitude;
    private _droneMotionLimits;
    private _droneOrientation;
    private _gimbalOrientations;
    private _pointOfInterest;
    constructor(reference: SourcedGeoSpatial, maxSampleDistance: number, path: Path, activeRestrictionZones: PlanRestrictionZone[], markersResolved: PathComponentModelMarkerResolved[], approachAltitudeATL: number, altitude: PathComponentModelParameterAltitude, droneMotionLimits: PathComponentModelParameterMotionLimits6, droneOrientation: PathComponentModelParameterOrientation3Optional, gimbalOrientations: Dictionary<PathComponentModelParameterOrientation3Optional>, pointOfInterest: PathComponentModelParameterPointOfInterest | null);
    resetToFirst(): PathComponentModelParameters;
    advanceToDistance(distance: number): PathComponentModelParameters;
    waypointDistance(index: number): number;
    get waypointDistances(): number[];
    get distance(): number;
    get altitude(): PathComponentModelParameterAltitude;
    get droneMotionLimits(): PathComponentModelParameterMotionLimits6;
    get droneOrientation(): PathComponentModelParameterOrientation3Optional | null;
    get droneOrientationInterpolates(): boolean;
    get gimbalOrientations(): {
        channel: number;
        orientation: PathComponentModelParameterOrientation3Optional;
    }[];
    gimbalOrientation(channel: number): PathComponentModelParameterOrientation3Optional | null;
    gimbalOrientationInterpolates(channel: number): boolean;
    private get orientationDistanceCurrent();
    private get orientationDistanceNext();
    get pointOfInterest(): PathComponentModelParameterPointOfInterest | null;
    get pointOfInterestInterpolates(): boolean;
    private get pointOfInterestNext();
}
export declare class PathComponentModelMarkerResolved {
    marker: PathComponentMarker;
    spatial: GeoSpatial;
    waypoint: PathComponentWaypoint | null;
    constructor(marker: PathComponentMarker, spatial: GeoSpatial, waypoint?: PathComponentWaypoint | null);
}
