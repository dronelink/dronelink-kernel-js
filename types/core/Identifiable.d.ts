import { SerializableAbstract } from "./SerializableAbstract";
export declare abstract class Identifiable implements SerializableAbstract {
    id: string;
    applyJSON(json: any): void;
    constructor(id?: string | null);
    get resettable(): boolean;
}
