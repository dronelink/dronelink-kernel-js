import { SerializableAbstract } from "../core/SerializableAbstract";
import { TypeName } from "../core/Enums";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { ComponentExecutionState } from "./ComponentExecutionState";
import { DroneMotionComponent } from "./DroneMotionComponent";
export declare class HoverComponent extends DroneMotionComponent implements SerializableAbstract {
    readonly type = TypeName.HoverComponent;
    time: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get repositionIfIncluded(): boolean;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
