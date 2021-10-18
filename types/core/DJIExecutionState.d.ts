import { TypeName } from "..";
import { Serializable } from "../core/Serializable";
import { ExternalExecutionState } from "./ExternalExecutionState";
export declare class DJIExecutionState extends ExternalExecutionState implements Serializable {
    readonly type = TypeName.DJIExecutionState;
    componentIndex: number;
    waypointIndex: number;
    waypointProgress: number;
    constructor(id?: string | null);
    applyJSON(json: any): void;
}
