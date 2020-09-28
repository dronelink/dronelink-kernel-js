import { TypeName } from "./Enums";
import { PlanComponent } from "../component/PlanComponent";
import { Identifiable } from "./Identifiable";
import { Variable } from "./Variable";
import { Descriptors } from "./Descriptors";
import { GeoCoordinate } from "./GeoCoordinate";
import { Serializable } from "./Serializable";
import { Drone } from "./Drone";
import { Device } from "./Device";
import { SubComponent } from "../component/SubComponent";
import { UserInterfaceSettings } from "./UserInterfaceSettings";
export declare class Func extends Identifiable implements Serializable {
    readonly type = TypeName.Func;
    coordinate: GeoCoordinate;
    descriptors: Descriptors;
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
export declare class FuncInput implements Serializable {
    readonly type = TypeName.FuncInput;
    descriptors: Descriptors;
    imageUrl: string | null;
    variable: Variable;
    optional: boolean;
    enumValues: any[] | null;
    dynamic: boolean;
    extensions: FuncInputExtensions | null;
    formatter: string | null;
    applyJSON(json: any): void;
    get title(): string;
    get subtitle(): string;
    get key(): string;
}
export declare class FuncInputExtensions implements Serializable {
    readonly type = TypeName.FuncInputExtensions;
    droneOffsetsCoordinateReference: boolean;
    applyJSON(json: any): void;
}
