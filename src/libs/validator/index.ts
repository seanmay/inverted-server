import { Validation, DateCompatible } from "validator/types";

export { ValidatorArray } from "./validator-array";
export { ValidatorDict } from "./validator-dict";

export const isString = (x: any): x is string => typeof x === "string";
export const isNumber = (x: any): x is number => typeof x === "number";
export const isBoolean = (x: any): x is boolean => typeof x === "boolean";
export const isDate = (x: any): x is DateCompatible => {
  const date = new Date(x);
  return !isNaN(date.getTime());
};

export const combineValidations = (...validations: Validation[]): Validation => x =>
  validations.reduce((valid, validate) => valid && validate(x), true);
