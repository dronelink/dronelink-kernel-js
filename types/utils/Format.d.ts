import { Locale, UnitSystem } from "../core/Enums";
import { GeoCoordinate } from "../core/GeoCoordinate";
import { GroundSampleDistance } from "../core/CameraSpecification";
export declare class Format {
    static Locale: Locale;
    static UnitSystem: UnitSystem;
    static string(key: string): string;
    static velocityHorizontal(value?: number, precise?: boolean): FormattedValue;
    static velocityVertical(value?: number, precise?: boolean): FormattedValue;
    static velocityRotational(value?: number): FormattedValue;
    static accelerationHorizontal(value?: number): FormattedValue;
    static accelerationVertical(value?: number): FormattedValue;
    static accelerationRotational(value?: number): FormattedValue;
    static timeElapsed(value?: number): string;
    static time(value?: number): {
        hours: FormattedValue;
        minutes: FormattedValue;
        seconds: FormattedValue;
    };
    static distance(value?: number, threshold?: number, precise?: boolean): FormattedValue;
    static distanceOffset(value: any): string;
    static altitude(value?: number): FormattedValue;
    static angle(value?: number, mod?: boolean, precise?: boolean): FormattedValue;
    static frequency(value?: number): FormattedValue;
    static area(value?: number): FormattedValue;
    static voltage(value?: number): FormattedValue;
    static cameraSpecificationLength(value?: number): FormattedValue;
    static cameraSpecificationPixels(value?: number): FormattedValue;
    static groundSampleDistance(value: GroundSampleDistance): FormattedValue;
    static groundSampleDistanceCombined(value: GroundSampleDistance): string;
    static absoluteTemperature(value?: number): string;
    static percent(value?: number): FormattedValue;
    static number(value: number, precise?: boolean): string;
    static integer(value: number, labels?: {
        singular: string;
        plural: string;
    } | null): string;
    private static degreesMinutesAndSeconds;
    static latitude(value: number, numeric?: boolean): FormattedValue;
    static longitude(value: number, numeric?: boolean): FormattedValue;
    static geoCoordinate(value: GeoCoordinate, numeric?: boolean): {
        latitude: FormattedValue;
        longitude: FormattedValue;
    };
    static geoCoordinatePair(value: GeoCoordinate, numeric?: boolean): string;
    static enum(name: string, value: any, abbreviation?: boolean): string;
    static fileSize(bytes: number, decimals?: number): FormattedValue;
    private static icaoAlphabet;
    static icaoWords(value: number): string[];
    static icaoLetters(value: number): string;
}
declare type FormattedValueUnit = {
    name: string;
    abbreviation: string;
};
export declare class FormattedValue {
    readonly value: string;
    readonly unit: FormattedValueUnit;
    private readonly spacer;
    constructor(value: string, unit: FormattedValueUnit, spacer?: string);
    toString: () => string;
}
export {};
