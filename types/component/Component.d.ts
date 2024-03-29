import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentEstimate } from "./ComponentEstimate";
import { ComponentNode } from "./ComponentNode";
import { Descriptors } from "../core/Descriptors";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { Identifiable } from "../core/Identifiable";
import { Vector2 } from "../core/Vector2";
import { SerializableAbstract } from "../core/SerializableAbstract";
import { Node } from "../core/Node";
import { GeoSpatial } from "../core/GeoSpatial";
import { Velocity3 } from "../core/Velocity3";
import { VelocityGimbalCommand } from "../command/gimbal/VelocityGimbalCommand";
import { Orientation3Optional } from "../core/Orientation3Optional";
import { ExecutionEngine } from "../core/Enums";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { ComponentSource } from "./ComponentSource";
import { AssetSource } from "../core/AssetSource";
import { GeoLocation } from "../core/GeoLocation";
import { Altitude } from "../core/Altitude";
import { ReferencedAltitude } from "../core/ReferencedAltitude";
import { CameraCaptureConfiguration } from "../core/CameraCaptureConfiguration";
import { ComponentContext } from "./ComponentContext";
import { PlanRestrictionZone } from "./PlanRestrictionZone";
import { MessageGroup } from "../core/MessageGroup";
import { CameraFocusCalibration } from "../core/CameraFocusCalibration";
export declare abstract class Component extends Identifiable implements SerializableAbstract {
    coordinate: GeoCoordinate;
    descriptors: Descriptors;
    resetReengagementCommands: boolean;
    dynamicHomeLocation: boolean;
    cameraCaptureConfigurations: CameraCaptureConfiguration[] | null;
    source: ComponentSource | null;
    assetSource: AssetSource | null;
    elevations: GeoLocation[] | null;
    script: string | null;
    customExecute: string | null;
    customExecutingMessageGroup: string | null;
    applyJSON(json: any): void;
    validate(context: ComponentContext): void;
    get title(): string;
    get subtitle(): string;
    verification(context: ComponentContext): Component | null;
    get singleton(): boolean;
    get exclusiveReadonly(): boolean;
    get exclusiveExecution(): boolean;
    get splittable(): boolean;
    get executionEngines(): ExecutionEngine[];
    executionEngineSupported(executionEngine: ExecutionEngine): boolean;
    toComponentForExecutionEngine(executionEngine: ExecutionEngine, context: ComponentContext): Component | null;
    split(context: ComponentContext, params?: any | null): Component[] | null;
    cameraCaptureConfigurationsEnabled(context?: ComponentExecuteContext | null): boolean;
    get cameraFocusCalibrationsRequired(): CameraFocusCalibration[];
    get referenceOffsets(): Vector2[];
    referenceOffsetsHandleCoordinate(context: ComponentContext): GeoCoordinate | null;
    elevationCoordinates(context: ComponentContext): GeoCoordinate[];
    elevationsPending(context: ComponentContext): boolean;
    referencedAltitude(context: ComponentContext, altitude: Altitude, coordinate: GeoCoordinate, tolerance?: number | null): ReferencedAltitude;
    elevation(coordinate: GeoCoordinate, tolerance?: number | null): GeoLocation | null;
    boundsCoordinates(context: ComponentContext): GeoCoordinate[];
    node(parent?: Node | null): ComponentNode;
    descendantAllowed(component: Component): boolean;
    endSpatial(context: ComponentContext): GeoSpatial | null;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    engaging(context: ComponentExecuteContext, start: GeoSpatial): GeoSpatial[] | null;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
    executingMessageGroup(context: ComponentExecuteContext, state: ComponentExecutionState, messageGroup: MessageGroup): MessageGroup | MessageGroup[] | null;
    executing(context: ComponentExecuteContext): ComponentExecutionState;
    succeeded(context: ComponentExecuteContext): ComponentExecutionState;
    failed(context: ComponentExecuteContext, error?: string | null): ComponentExecutionState;
    private finished;
    addGimbalVelocityCommand(context: ComponentExecuteContext, channel: number, orientationTarget: Orientation3Optional, referencePath: {
        x: number;
        z: number;
    }, baseVelocity?: Velocity3): VelocityGimbalCommand;
    toString: () => string;
    activeRestrictionZones(context: ComponentContext): PlanRestrictionZone[];
}
