import { Serializable } from "./Serializable";
import { TypeName, MessageLevel } from "./Enums";
import { MessageGroup } from "./MessageGroup";
export declare class Message implements Serializable {
    readonly type = TypeName.Message;
    title: string;
    details: string | null;
    level: MessageLevel;
    applyJSON(json: any): void;
    constructor(title?: string, details?: string | null, level?: MessageLevel);
    toString: () => string;
    toMessageGroup(): MessageGroup;
    select(message: Message | null): Message;
}
