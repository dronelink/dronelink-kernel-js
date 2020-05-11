import { Context } from "../core/Context";
import { Dictionary } from "../core/Dictionary";
import { Camera } from "../core/Camera";
export declare class ComponentEstimateContext extends Context {
    pathRequired: boolean;
    altitudeRequired: boolean;
    timeRequired: boolean;
    cameras: Dictionary<Camera>;
    camera(channel?: number): Camera;
}
