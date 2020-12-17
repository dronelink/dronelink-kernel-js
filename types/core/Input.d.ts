import { Variable } from "./Variable";
import { Descriptors } from "./Descriptors";
import { SerializableAbstract } from "./SerializableAbstract";
export declare class Input implements SerializableAbstract {
    descriptors: Descriptors;
    imageUrl: string | null;
    variable: Variable;
    optional: boolean;
    enumValues: any[] | null;
    dynamic: boolean;
    formatter: string | null;
    applyJSON(json: any): void;
    get title(): string;
    get subtitle(): string;
    get key(): string;
}
