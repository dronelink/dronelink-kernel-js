import { PlanComponent } from "../component/PlanComponent";
import { Engagement } from "./Engagement";
import { Execution } from "./Execution";
import { Drone } from "./Drone";
import { Descriptors } from "./Descriptors";
import { Identifiable } from "./Identifiable";
import { Serializable } from "./Serializable";
import { User } from "./User";
import { TypeName } from "./Enums";
import { Component } from "../component/Component";
import { ComponentExecutionState } from "../component/ComponentExecutionState";
import { Datetime } from "./Datetime";
import { ComponentExecuteContext } from "../component/ComponentExecuteContext";
import { ComponentEstimate } from "../component/ComponentEstimate";
import { ComponentEstimateContext } from "../component/ComponentEstimateContext";
import { Message } from "./Message";
import { Timeline } from "./Timeline";
import { Disengagement } from "./Disengagement";
import { ComponentNodeExecutionState } from "../component/ComponentNodeExecutionState";
import { MessageGroup } from "./MessageGroup";
import { Context } from "./Context";
import { Device } from "./Device";
import { AssetManifest } from "./AssetManifest";
import { Func } from "./Func";
import { GeoSpatial } from "./GeoSpatial";
export declare class Mission extends Identifiable implements Serializable {
    readonly type = TypeName.Mission;
    descriptors: Descriptors | null;
    func: Func | null;
    plan: PlanComponent;
    execution: Execution;
    engagements: Engagement[];
    applyJSON(json: any): void;
    static createFromComponent(component: Component): Mission;
    get verification(): Mission | null;
    get complete(): boolean;
    get state(): ComponentExecutionState;
    get componentNodeExecutionStates(): ComponentNodeExecutionState[];
    get executingMessageGroups(): MessageGroup[];
    get engagementsTimeElapsed(): number;
    get droneMotionComponentCount(): number;
    get elevationsRequired(): boolean;
    get engaged(): boolean;
    get reengaging(): boolean;
    get context(): Context;
    componentExecuteContext(user: User, drone: Drone, engagement: Engagement): ComponentExecuteContext;
    componentEstimateParams(pathRequired?: boolean, altitudeRequired?: boolean, timeRequired?: boolean, drone?: Drone | null): {
        context: ComponentEstimateContext;
        start: GeoSpatial;
    };
    estimate(altitudeRequired?: boolean, timeRequired?: boolean, drone?: Drone | null): ComponentEstimate;
    engageDisallowedReasons(user: User, device: Device, drone: Drone): Message[];
    engage(user: User, device: Device, drone: Drone, datetime?: Datetime | null): Engagement;
    execute(user: User, device: Device, drone: Drone, timeline?: Timeline | null, datetime?: Datetime | null, preview?: boolean): ComponentExecutionState;
    disengage(drone: Drone, reason: Message): void;
    get disengagement(): Disengagement | null;
    reengagement(drone: Drone): Mission | null;
    get assetManifest(): AssetManifest;
    simulate(progress: (mission: Mission, timeline: Timeline) => boolean): void;
}
