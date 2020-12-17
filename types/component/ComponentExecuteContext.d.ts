import { Execution } from "../core/Execution";
import { Engagement } from "../core/Engagement";
import { PlanComponent } from "./PlanComponent";
import { Datetime } from "../core/Datetime";
import { ComponentContext } from "./ComponentContext";
export declare class ComponentExecuteContext extends ComponentContext {
    readonly execution: Execution;
    readonly engagement: Engagement;
    constructor(plan: PlanComponent, execution: Execution, engagement: Engagement);
    elapsedTime(since: Datetime): number;
}
