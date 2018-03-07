import { Validation } from "./types";
import { ValidatorArray } from "./validator-array";

export type ValidatorDict = <T = {[x: string]: Validation}>(
  validations: { [K in keyof T]: Validation }
) => Validation;

export const ValidatorDict: ValidatorDict = validations =>
  ValidatorArray(Object.entries(validations));
