import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { AchievableDroneMotionComponent } from "./AchievableDroneMotionComponent";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
export declare class HeadingComponent extends AchievableDroneMotionComponent implements Serializable {
    readonly type = TypeName.HeadingComponent;
    heading: number;
    achievementTime: number;
    achievementDistance: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    get repositionIfIncluded(): boolean;
    achieved(context: ComponentExecuteContext): boolean;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
