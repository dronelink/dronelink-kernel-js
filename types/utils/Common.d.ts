export declare class Common {
    static sleep(millis: number): Promise<unknown>;
    static uuid(): string;
    static parseBoolean(value: any, defaultValue?: boolean | null): any;
    static parseFloat(value: any, defaultValue?: number | null): any;
    static parseInt(value: any, defaultValue?: number | null): any;
    static parseString(value: any, defaultValue?: string | null): any;
    static parseArray(value: any, defaultValue?: any): any;
    static kalmanFilter(settings: any): any;
    private static sigmoidBase;
    static sigmoid(percent: number, k?: number): number;
    static modSafe(value: number, mod: number): number;
    static matchSign(number: number, sign: number): number;
    static movingAverage(values: number[], exponent?: number): number;
    static debugLog(message: String): void;
    static last<T>(array: T[]): T;
    static lastSafe<T>(array: T[]): T | null;
    static remove(array: any[], remove: any): any[];
    static joinNotEmpty(array: string[], delimeter?: string): string;
    static descendantsMatching(element: any, condition: (element: any) => boolean): any[];
    static descendantsMatchingIterable(children: any[] | null, condition: (element: any) => boolean): any[];
}
