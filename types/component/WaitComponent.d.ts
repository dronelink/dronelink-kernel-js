import { SubComponent } from "./SubComponent";
import { SerializableAbstract } from "../core/SerializableAbstract";
import { TypeName } from "../core/Enums";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { ComponentExecutionState } from "./ComponentExecutionState";
export declare class WaitComponent extends SubComponent implements SerializableAbstract {
    readonly type = TypeName.WaitComponent;
    time: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get exclusiveReadonly(): boolean;
    get exclusiveExecution(): boolean;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
