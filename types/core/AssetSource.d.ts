import { SerializableAbstract } from "./SerializableAbstract";
import { TypeName } from "./Enums";
import { Descriptors } from "./Descriptors";
import { Asset } from "./Asset";
export declare class AssetSource implements SerializableAbstract {
    readonly type = TypeName.AssetSource;
    key: string;
    descriptors: Descriptors;
    applyJSON(json: any): void;
    constructor(key?: string);
    toAsset(defaultKey?: string | null): Asset;
    get title(): string;
    get subtitle(): string;
}
