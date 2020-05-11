import { Identifiable } from "./Identifiable";
import { TypeName } from "./Enums";
import { Serializable } from "./Serializable";
export declare class User extends Identifiable implements Serializable {
    readonly type = TypeName.User;
    applyJSON(json: any): void;
}
