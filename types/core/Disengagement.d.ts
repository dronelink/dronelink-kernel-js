import { Serializable } from "./Serializable";
import { Identifiable } from "./Identifiable";
import { TypeName } from "./Enums";
import { Datetime } from "./Datetime";
import { Message } from "./Message";
export declare class Disengagement extends Identifiable implements Serializable {
    readonly type = TypeName.Disengagement;
    disengaged: Datetime;
    reason: Message;
    applyJSON(json: any): void;
    constructor(reason?: Message);
}
