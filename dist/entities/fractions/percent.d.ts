import { Rounding } from "../../constants";
import Fraction from "./fraction";
export default class Percent extends Fraction {
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
}