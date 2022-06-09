import { Dictionary } from "../core/Dictionary";
import { Camera } from "../core/Camera";
import { ComponentContext } from "./ComponentContext";
export declare class ComponentEstimateContext extends ComponentContext {
    pathApproximationOnly: boolean;
    pathRequired: boolean;
    altitudeRequired: boolean;
    timeRequired: boolean;
    cameras: Dictionary<Camera>;
    camera(channel?: number): Camera;
}
