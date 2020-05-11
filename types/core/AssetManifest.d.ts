import { SerializableAbstract } from "./SerializableAbstract";
import { TypeName } from "./Enums";
import { Asset } from "./Asset";
import { Descriptors } from "./Descriptors";
import { Identifiable } from "./Identifiable";
import { GeoCoordinate } from "./GeoCoordinate";
export declare class AssetManifest extends Identifiable implements SerializableAbstract {
    readonly type = TypeName.AssetManifest;
    descriptors: Descriptors;
    coordinate: GeoCoordinate | null;
    assets: Asset[];
    applyJSON(json: any): void;
    constructor(id?: string | null, descriptors?: Descriptors, assets?: Asset[]);
    add(asset: Asset): void;
    get size(): number;
}
