import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { TypeName, RotationDirection } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { AchievableDroneMotionComponent } from "./AchievableDroneMotionComponent";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
export declare class RotationComponent extends AchievableDroneMotionComponent implements Serializable {
    readonly type = TypeName.RotationComponent;
    direction: RotationDirection;
    time: number;
    distance: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get repositionIfIncluded(): boolean;
    achieved(context: ComponentExecuteContext): boolean;
    private model;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
