import { Component } from "../component/Component";
import { ComponentExecutionState } from "../component/ComponentExecutionState";
import { Dictionary } from "./Dictionary";
import { Serializable } from "./Serializable";
import { CommandReengagementTiming, TypeName } from "./Enums";
import { Command } from "../command/Command";
import { CameraFile } from "./CameraFile";
import { ExternalExecutionState } from "./ExternalExecutionState";
import { ExecutionEngine } from "..";
export declare class Execution implements Serializable {
    readonly type = TypeName.Execution;
    componentStates: Dictionary<ComponentExecutionState>;
    reengagementCommands: Command[];
    cameraFiles: Dictionary<CameraFile[]>;
    externalStates: Dictionary<ExternalExecutionState>;
    applyJSON(json: any): void;
    removeComponentStateByID(componentID: string): void;
    getComponentStateByID(componentID: string): ComponentExecutionState;
    getComponentState(component: Component): ComponentExecutionState;
    addReengagementCommand(command: Command): void;
    reengagementCommandsForTiming(timing: CommandReengagementTiming): Command[];
    addCameraFile(channel: number, cameraFile: CameraFile): void;
    get allCameraFiles(): CameraFile[];
    getExternalState(executionEngine?: ExecutionEngine | null): ExternalExecutionState | null;
    updateExternalState(state: ExternalExecutionState): void;
}
