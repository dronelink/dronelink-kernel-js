import { Serializable } from "../core/Serializable";
import { Identifiable } from "../core/Identifiable";
import { TypeName, DJIWaypointMissionComponentWaypointActionType } from "../core/Enums";
export declare class DJIWaypointMissionComponentWaypointAction extends Identifiable implements Serializable {
    readonly type = TypeName.DJIWaypointMissionComponentWaypointAction;
    actionType: DJIWaypointMissionComponentWaypointActionType;
    actionParam: number;
}
