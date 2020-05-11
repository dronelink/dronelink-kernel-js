import { Command } from "./Command";
import { SerializableAbstract } from "../core/SerializableAbstract";
export declare abstract class PayloadCommand extends Command implements SerializableAbstract {
    channel: number;
    applyJSON(json: any): void;
}
