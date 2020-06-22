import { TypeName, VariableValueType, MeasurementType } from "./Enums";
import { Descriptors } from "./Descriptors";
import { Serializable } from "./Serializable";
import { Drone } from "./Drone";
export declare class Variable implements Serializable {
    readonly type = TypeName.Variable;
    descriptors: Descriptors;
    valueType: VariableValueType;
    valueArray: boolean;
    valueNumberMeasurementType: MeasurementType | null;
    value: any | null;
    applyJSON(json: any): void;
    constructor(value?: any | null, valueType?: VariableValueType | null);
    get title(): string;
    get subtitle(): string;
    get valueModelToUser(): any | null;
    set valueUserToModel(value: any | null);
    clearValue(arrayFull?: boolean): void;
    clearArrayValue(full?: boolean): void;
    get valueFormatted(): string;
    get valueNumberMeasurementTypeDisplay(): string;
    defaultValue(drone?: Drone | null): any | null;
    compatible(variable: Variable): boolean;
}
