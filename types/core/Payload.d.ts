import { Identifiable } from "./Identifiable";
import { SerializableAbstract } from "./SerializableAbstract";
export declare class Payload extends Identifiable implements SerializableAbstract {
    channel: number;
    applyJSON(json: any): void;
    constructor(channel?: number);
}
