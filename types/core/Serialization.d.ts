import { TypeName } from "./Enums";
export declare class Serialization {
    static WriteCompressByDefault: boolean;
    static typeDisplay(value: any, key?: string): string;
    static clone(json: any, resetIDs?: boolean): any;
    static plainJSON(json: any): any;
    static write(json: any): string | null;
    static read(json: any, error?: (error: any | null) => void): any | null;
    static serialize(json: any): string;
    static compress(value: any): string | null;
    static decompress(value: any): any | null;
    static deserialize(json: any, requiredType?: any | null, nullable?: boolean): any | null;
    static createInstance(type: string): any | null;
    private static deserializeInstance;
    static generateCode(json: any, depth?: number, typePrefix?: string | null): string | null;
    private static indent;
    static validateJson(json: any): void;
    static validateType(json: any, type: TypeName): void;
}
