export interface Serializable {
    readonly type: string;
    applyJSON(json: any): void;
}
