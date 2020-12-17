import { MeasurementType } from "../core/Enums";
import { FormattedValue } from "./Format";
export declare class Convert {
    static feetToMeters(value: number): number;
    static metersToFeet(value: number): number;
    static metersToInches(value: number): number;
    static milesPerHourToMetersPerSecond(value: number): number;
    static metersPerSecondToMilesPerHour(value: number): number;
    static metersPerSecondToKilometersPerHour(value: number): number;
    static kilometersPerHourToMetersPerSecond(value: number): number;
    static acresToSquareMeters(value: number): number;
    static squareMetersToAcres(value: number): number;
    static squareMetersToHectares(value: number): number;
    static radiansMod(value: number): number;
    static radiansToDegrees(value: number, mod?: boolean): number;
    static degreesToRadians(value: number, mod?: boolean): number;
    static distance(): Converters;
    static angle(mod?: boolean): Converters;
    static percent(): Converters;
    static velocityHorizontal(): Converters;
    static velocityVertical(): Converters;
    static velocityRotational(): Converters;
    static accelerationHorizontal(): Converters;
    static accelerationVertical(): Converters;
    static accelerationRotational(): Converters;
    static converters(measurementType: MeasurementType): Converters;
    static findStrings(source: string, condition: (value: string) => boolean): string[];
}
declare type ConverterValueUnit = {
    name: string;
    abbreviation: string;
};
export declare class Converter {
    readonly unit: ConverterValueUnit;
    readonly precision: number;
    readonly convert: (value: number) => number;
    constructor(unit: ConverterValueUnit, precision: number, convert?: ((value: number) => number) | null);
    get increment(): number;
    get incrementConverted(): number;
    display(value: number): string;
}
export declare class Converters {
    format: (value: number) => FormattedValue;
    modelToUser: Converter;
    userToModel: Converter;
    constructor(format: (value: number) => FormattedValue, modelToUser: Converter, userToModel?: Converter | null);
}
export {};
