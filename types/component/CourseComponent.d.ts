import { ComponentExecutionState } from "./ComponentExecutionState";
import { ComponentExecuteContext } from "./ComponentExecuteContext";
import { TypeName } from "../core/Enums";
import { Serializable } from "../core/Serializable";
import { AchievableDroneMotionComponent } from "./AchievableDroneMotionComponent";
import { ComponentEstimateContext } from "./ComponentEstimateContext";
import { GeoSpatial } from "../core/GeoSpatial";
import { ComponentEstimate } from "./ComponentEstimate";
export declare class CourseComponent extends AchievableDroneMotionComponent implements Serializable {
    readonly type = TypeName.CourseComponent;
    course: number;
    distance: number;
    applyJSON(json: any): void;
    get subtitle(): string;
    achieved(context: ComponentExecuteContext): boolean;
    estimate(context: ComponentEstimateContext, start: GeoSpatial): ComponentEstimate;
    engaging(context: ComponentExecuteContext, start: GeoSpatial): GeoSpatial[] | null;
    execute(context: ComponentExecuteContext): ComponentExecutionState;
}
