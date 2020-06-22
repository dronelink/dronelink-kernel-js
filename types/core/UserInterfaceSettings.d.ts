import { TypeName } from "./Enums";
import { Serializable } from "./Serializable";
export declare class UserInterfaceSettings implements Serializable {
    readonly type = TypeName.UserInterfaceSettings;
    reticalImageUrl: string | null;
    droneOffsetsVisible: Boolean | null;
    missionDetailsExpanded: Boolean | null;
    applyJSON(json: any): void;
}
