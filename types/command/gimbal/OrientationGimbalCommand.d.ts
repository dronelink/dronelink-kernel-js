import { GimbalCommand } from "./GimbalCommand";
import { Serializable } from "../../core/Serializable";
import { TypeName } from "../../core/Enums";
import { Orientation3Optional } from "../../core/Orientation3Optional";
export declare class OrientationGimbalCommand extends GimbalCommand implements Serializable {
    readonly type = TypeName.OrientationGimbalCommand;
    orientation: Orientation3Optional;
    applyJSON(json: any): void;
    get subtitle(): string;
    get verifiable(): boolean;
}
