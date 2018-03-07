import { ValidatorDict, isString, combineValidations, isDate } from "validator";
import { DBUser, User } from "@domains/users/types";

export const isValidDBUser = ValidatorDict<DBUser>({
  id: isString,
  familyNames: isString,
  givenNames: isString,
  alias: isString,
  created: combineValidations(isString, isDate)
});

export const isValidUser = ValidatorDict<User>({
  id: isString,
  name: ValidatorDict<User["name"]>({ family: isString, given: isString }),
  alias: isString,
  created: isDate
});