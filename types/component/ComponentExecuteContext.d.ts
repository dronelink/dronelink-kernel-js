import { Execution } from "../core/Execution";
import { Engagement } from "../core/Engagement";
import { PlanComponent } from "./PlanComponent";
import { Context } from "../core/Context";
import { Datetime } from "../core/Datetime";
export declare class ComponentExecuteContext extends Context {
    readonly execution: Execution;
    readonly engagement: Engagement;
    constructor(plan: PlanComponent, execution: Execution, engagement: Engagement);
    elapsedTime(since: Datetime): number;
}
