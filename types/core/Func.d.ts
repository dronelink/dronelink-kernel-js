import { TypeName } from "./Enums";
import { PlanComponent } from "../component/PlanComponent";
import { Identifiable } from "./Identifiable";
import { Descriptors } from "./Descriptors";
import { GeoCoordinate } from "./GeoCoordinate";
import { Serializable } from "./Serializable";
import { Drone } from "./Drone";
import { Device } from "./Device";
import { SubComponent } from "../component/SubComponent";
import { UserInterfaceSettings } from "./UserInterfaceSettings";
import { Input } from "./Input";
export declare class Func extends Identifiable implements Serializable {
    readonly type = TypeName.Func;
    coordinate: GeoCoordinate;
    descriptors: Descriptors;
    introImageUrl: string | null;
    components: SubComponent[];
    inputs: FuncInput[];
    dynamicInputs: string | null;
    executable: string;
    userInterfaceSettings: UserInterfaceSettings | null;
    private cachedDynamicInputs;
    toJSON(): any;
    applyJSON(json: any): void;
    get title(): string;
    get subtitle(): string;
    get urls(): string[];
    private get inputsVariableValuesNamed();
    private evaluate;
    validateSyntax(dronelink: any, drone?: Drone | null): void;
    private nextDynamicInput;
    addNextDynamicInput(dronelink: any, drone?: Drone | null, device?: Device | null, metadata?: any, syntaxValidation?: boolean): FuncInput | null;
    removeLastDynamicInput(): boolean;
    addCachedInputs(func: Func): void;
    execute(dronelink: any, drone?: Drone | null, device?: Device | null, metadata?: any): PlanComponent;
    inputFormatted(dronelink: any, inputIndex: number, variableValueIndex?: number | null): string;
}
export declare class FuncInput extends Input implements Serializable {
    readonly type = TypeName.FuncInput;
    extensions: FuncInputExtensions | null;
    applyJSON(json: any): void;
}
export declare class FuncInputExtensions implements Serializable {
    readonly type = TypeName.FuncInputExtensions;
    droneOffsetsCoordinateReference: boolean;
    applyJSON(json: any): void;
}
