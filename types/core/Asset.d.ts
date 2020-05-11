import { SerializableAbstract } from "../core/SerializableAbstract";
import { TypeName } from "./Enums";
import { CameraFile } from "./CameraFile";
import { Descriptors } from "./Descriptors";
export declare class Asset implements SerializableAbstract {
    readonly type = TypeName.Asset;
    key: string;
    descriptors: Descriptors;
    cameraFiles: CameraFile[];
    applyJSON(json: any): void;
    constructor(key?: string | null, descriptors?: Descriptors);
    merge(asset: Asset): void;
    get size(): number;
}
