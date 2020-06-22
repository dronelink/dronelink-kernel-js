import { Component } from "../component/Component";
import { ComponentExecutionState } from "../component/ComponentExecutionState";
import { Dictionary } from "./Dictionary";
import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Command } from "../command/Command";
import { CameraFile } from "./CameraFile";
export declare class Execution implements Serializable {
    readonly type = TypeName.Execution;
    componentStates: Dictionary<ComponentExecutionState>;
    reengagementCommands: Command[];
    cameraFiles: Dictionary<CameraFile[]>;
    applyJSON(json: any): void;
    getComponentStateByID(componentID: string): ComponentExecutionState;
    getComponentState(component: Component): ComponentExecutionState;
    addReengagementCommand(command: Command): void;
    addCameraFile(channel: number, cameraFile: CameraFile): void;
    get allCameraFiles(): CameraFile[];
}