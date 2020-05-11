import { Serializable } from "./Serializable";
import { TypeName } from "./Enums";
import { Descriptors } from "./Descriptors";
import { Message } from "./Message";
export declare class MessageGroup implements Serializable {
    readonly type = TypeName.MessageGroup;
    descriptors: Descriptors;
    messages: Message[];
    applyJSON(json: any): void;
    toString: () => string;
}
