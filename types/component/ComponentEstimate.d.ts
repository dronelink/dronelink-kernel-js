import { GeoSpatial } from "../core/GeoSpatial";
import { Identifiable } from "../core/Identifiable";
import { Component } from "./Component";
import { Limits } from "../core/Limits";
import { Dictionary } from "../core/Dictionary";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { CameraCaptureConfiguration } from "../core/CameraCaptureConfiguration";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { CameraMode } from "../core/Enums";
export declare class ComponentEstimateCameraCapture {
    channel: number;
    photos: number;
    videos: number;
    constructor(channel?: number, photos?: number, videos?: number);
}
export declare class ComponentEstimateCameraCaptures {
    channels: Dictionary<ComponentEstimateCameraCapture>;
    add(channel: number, mode: CameraMode, count: number): void;
}
export declare class ComponentEstimate extends Identifiable {
    component: Component;
    droneSpatials: GeoSpatial[];
    time: number;
    timeConcurrent: boolean;
    cameraCaptures: Dictionary<ComponentEstimateCameraCapture>;
    level: number;
    children: ComponentEstimate[];
    constructor(component: Component, droneSpatials?: GeoSpatial[], time?: number);
    get list(): ComponentEstimate[];
    get firstDroneSpatial(): GeoSpatial | null;
    get lastDroneSpatial(): GeoSpatial | null;
    get allDroneSpatials(): GeoSpatial[];
    segments(included?: (estimate: ComponentEstimate) => boolean): ComponentEstimate[];
    segmentSpatials(level?: number | null): GeoSpatial[][];
    segmentCoordinates(level?: number | null): GeoCoordinate[][];
    cameraCapture(channel?: number): ComponentEstimateCameraCapture;
    updateWithCameraCaptureConfigurations(context: ComponentEstimateContext, cameraCaptureConfigurations: CameraCaptureConfiguration[] | null, time?: number | null): void;
    get totalTime(): number;
    get totalPhotos(): number;
    get totalVideos(): number;
    get summary(): {
        time: number;
        distance: number;
        altitude: Limits;
        horizontalVelocityMax: number;
        verticalVelocity: Limits;
    };
    debugLog(level?: number): void;
    findDescendant(id: string): ComponentEstimate | null;
}
