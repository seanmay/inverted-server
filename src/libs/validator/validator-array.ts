import { Validation } from "./types";

export const ValidatorArray = (validations: [string, Validation][]): Validation => obj =>
  validations.reduce(
    (valid, [key, validate]) => valid && validate(obj[key]),
    true
  );
